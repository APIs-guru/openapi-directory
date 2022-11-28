import { SpeakeasyBase } from "../../../internal/utils";
import { CacheSettings } from "./cachesettings";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheBehavior } from "./cachebehavior";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { InputOrigin } from "./inputorigin";
import { Tag } from "./tag";
export declare class CreateDistributionRequest extends SpeakeasyBase {
    bundleId: string;
    cacheBehaviorSettings?: CacheSettings;
    cacheBehaviors?: CacheBehaviorPerPath[];
    defaultCacheBehavior: CacheBehavior;
    distributionName: string;
    ipAddressType?: IpAddressTypeEnum;
    origin: InputOrigin;
    tags?: Tag[];
}
