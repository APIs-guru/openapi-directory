import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=configurationOptions" })
  configurationOptions?: Map<string, string>;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=dnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=healthCheckPath" })
  healthCheckPath?: string;

  @Metadata({ data: "json, name=instanceHealthSummary", elemType: shared.InstanceHealthSummary })
  instanceHealthSummary?: InstanceHealthSummary[];

  @Metadata({ data: "json, name=instancePort" })
  instancePort?: number;

  @Metadata({ data: "json, name=ipAddressType" })
  ipAddressType?: IpAddressTypeEnum;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: LoadBalancerProtocolEnum;

  @Metadata({ data: "json, name=publicPorts" })
  publicPorts?: number[];

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=state" })
  state?: LoadBalancerStateEnum;

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=tlsCertificateSummaries", elemType: shared.LoadBalancerTlsCertificateSummary })
  tlsCertificateSummaries?: LoadBalancerTlsCertificateSummary[];
}
