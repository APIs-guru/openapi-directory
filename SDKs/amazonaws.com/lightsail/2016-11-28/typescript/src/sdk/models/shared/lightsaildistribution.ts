import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ableToUpdateBundle" })
  ableToUpdateBundle?: boolean;

  @Metadata({ data: "json, name=alternativeDomainNames" })
  alternativeDomainNames?: string[];

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=cacheBehaviorSettings" })
  cacheBehaviorSettings?: CacheSettings;

  @Metadata({ data: "json, name=cacheBehaviors", elemType: shared.CacheBehaviorPerPath })
  cacheBehaviors?: CacheBehaviorPerPath[];

  @Metadata({ data: "json, name=certificateName" })
  certificateName?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=defaultCacheBehavior" })
  defaultCacheBehavior?: CacheBehavior;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=origin" })
  origin?: Origin;

  @Metadata({ data: "json, name=originPublicDNS" })
  originPublicDns?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
