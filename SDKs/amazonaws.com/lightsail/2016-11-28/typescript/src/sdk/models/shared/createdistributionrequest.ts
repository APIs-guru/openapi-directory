import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSettings } from "./cachesettings";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheBehavior } from "./cachebehavior";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { InputOrigin } from "./inputorigin";
import { Tag } from "./tag";



export class CreateDistributionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId: string;

  @SpeakeasyMetadata({ data: "json, name=cacheBehaviorSettings" })
  cacheBehaviorSettings?: CacheSettings;

  @SpeakeasyMetadata({ data: "json, name=cacheBehaviors", elemType: CacheBehaviorPerPath })
  cacheBehaviors?: CacheBehaviorPerPath[];

  @SpeakeasyMetadata({ data: "json, name=defaultCacheBehavior" })
  defaultCacheBehavior: CacheBehavior;

  @SpeakeasyMetadata({ data: "json, name=distributionName" })
  distributionName: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin: InputOrigin;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
