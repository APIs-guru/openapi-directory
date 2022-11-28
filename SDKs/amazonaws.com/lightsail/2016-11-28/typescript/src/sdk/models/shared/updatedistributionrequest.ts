import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSettings } from "./cachesettings";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheBehavior } from "./cachebehavior";
import { InputOrigin } from "./inputorigin";



export class UpdateDistributionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheBehaviorSettings" })
  cacheBehaviorSettings?: CacheSettings;

  @SpeakeasyMetadata({ data: "json, name=cacheBehaviors", elemType: CacheBehaviorPerPath })
  cacheBehaviors?: CacheBehaviorPerPath[];

  @SpeakeasyMetadata({ data: "json, name=defaultCacheBehavior" })
  defaultCacheBehavior?: CacheBehavior;

  @SpeakeasyMetadata({ data: "json, name=distributionName" })
  distributionName: string;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: InputOrigin;
}
