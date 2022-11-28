import { SpeakeasyBase } from "../../../internal/utils";
import { CacheSettings } from "./cachesettings";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheBehavior } from "./cachebehavior";
import { InputOrigin } from "./inputorigin";
export declare class UpdateDistributionRequest extends SpeakeasyBase {
    cacheBehaviorSettings?: CacheSettings;
    cacheBehaviors?: CacheBehaviorPerPath[];
    defaultCacheBehavior?: CacheBehavior;
    distributionName: string;
    isEnabled?: boolean;
    origin?: InputOrigin;
}
