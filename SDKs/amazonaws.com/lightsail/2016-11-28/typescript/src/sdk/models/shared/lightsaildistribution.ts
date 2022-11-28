import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSettings } from "./cachesettings";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheBehavior } from "./cachebehavior";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceLocation } from "./resourcelocation";
import { Origin } from "./origin";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";



// LightsailDistribution
/** 
 * Describes an Amazon Lightsail content delivery network (CDN) distribution.
**/
export class LightsailDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ableToUpdateBundle" })
  ableToUpdateBundle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=alternativeDomainNames" })
  alternativeDomainNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=cacheBehaviorSettings" })
  cacheBehaviorSettings?: CacheSettings;

  @SpeakeasyMetadata({ data: "json, name=cacheBehaviors", elemType: CacheBehaviorPerPath })
  cacheBehaviors?: CacheBehaviorPerPath[];

  @SpeakeasyMetadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultCacheBehavior" })
  defaultCacheBehavior?: CacheBehavior;

  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: Origin;

  @SpeakeasyMetadata({ data: "json, name=originPublicDNS" })
  originPublicDns?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
