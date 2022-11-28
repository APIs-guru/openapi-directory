import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceHealthSummary } from "./instancehealthsummary";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceLocation } from "./resourcelocation";
import { LoadBalancerProtocolEnum } from "./loadbalancerprotocolenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { LoadBalancerStateEnum } from "./loadbalancerstateenum";
import { Tag } from "./tag";
import { LoadBalancerTlsCertificateSummary } from "./loadbalancertlscertificatesummary";



// LoadBalancer
/** 
 * Describes a load balancer.
**/
export class LoadBalancer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=configurationOptions" })
  configurationOptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=dnsName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=healthCheckPath" })
  healthCheckPath?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceHealthSummary", elemType: InstanceHealthSummary })
  instanceHealthSummary?: InstanceHealthSummary[];

  @SpeakeasyMetadata({ data: "json, name=instancePort" })
  instancePort?: number;

  @SpeakeasyMetadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: LoadBalancerProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=publicPorts" })
  publicPorts?: number[];

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: LoadBalancerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=tlsCertificateSummaries", elemType: LoadBalancerTlsCertificateSummary })
  tlsCertificateSummaries?: LoadBalancerTlsCertificateSummary[];
}
