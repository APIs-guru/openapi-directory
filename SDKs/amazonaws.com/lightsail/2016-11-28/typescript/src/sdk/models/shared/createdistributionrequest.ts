import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CacheSettings } from "./cachesettings";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheBehavior } from "./cachebehavior";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { InputOrigin } from "./inputorigin";
import { Tag } from "./tag";


export class CreateDistributionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId: string;

  @Metadata({ data: "json, name=cacheBehaviorSettings" })
  cacheBehaviorSettings?: CacheSettings;

  @Metadata({ data: "json, name=cacheBehaviors", elemType: shared.CacheBehaviorPerPath })
  cacheBehaviors?: CacheBehaviorPerPath[];

  @Metadata({ data: "json, name=defaultCacheBehavior" })
  defaultCacheBehavior: CacheBehavior;

  @Metadata({ data: "json, name=distributionName" })
  distributionName: string;

  @Metadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @Metadata({ data: "json, name=origin" })
  origin: InputOrigin;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
