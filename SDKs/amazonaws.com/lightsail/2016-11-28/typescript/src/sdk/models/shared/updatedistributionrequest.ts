import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CacheSettings } from "./cachesettings";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheBehavior } from "./cachebehavior";
import { InputOrigin } from "./inputorigin";


export class UpdateDistributionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheBehaviorSettings" })
  cacheBehaviorSettings?: CacheSettings;

  @Metadata({ data: "json, name=cacheBehaviors", elemType: shared.CacheBehaviorPerPath })
  cacheBehaviors?: CacheBehaviorPerPath[];

  @Metadata({ data: "json, name=defaultCacheBehavior" })
  defaultCacheBehavior?: CacheBehavior;

  @Metadata({ data: "json, name=distributionName" })
  distributionName: string;

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "json, name=origin" })
  origin?: InputOrigin;
}
