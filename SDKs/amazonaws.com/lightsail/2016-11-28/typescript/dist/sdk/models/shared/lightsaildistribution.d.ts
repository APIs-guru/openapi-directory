import { SpeakeasyBase } from "../../../internal/utils";
import { CacheSettings } from "./cachesettings";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheBehavior } from "./cachebehavior";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceLocation } from "./resourcelocation";
import { Origin } from "./origin";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * Describes an Amazon Lightsail content delivery network (CDN) distribution.
**/
export declare class LightsailDistribution extends SpeakeasyBase {
    ableToUpdateBundle?: boolean;
    alternativeDomainNames?: string[];
    arn?: string;
    bundleId?: string;
    cacheBehaviorSettings?: CacheSettings;
    cacheBehaviors?: CacheBehaviorPerPath[];
    certificateName?: string;
    createdAt?: Date;
    defaultCacheBehavior?: CacheBehavior;
    domainName?: string;
    ipAddressType?: IpAddressTypeEnum;
    isEnabled?: boolean;
    location?: ResourceLocation;
    name?: string;
    origin?: Origin;
    originPublicDns?: string;
    resourceType?: ResourceTypeEnum;
    status?: string;
    supportCode?: string;
    tags?: Tag[];
}
