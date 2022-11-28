import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceHealthSummary } from "./instancehealthsummary";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceLocation } from "./resourcelocation";
import { LoadBalancerProtocolEnum } from "./loadbalancerprotocolenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { LoadBalancerStateEnum } from "./loadbalancerstateenum";
import { Tag } from "./tag";
import { LoadBalancerTlsCertificateSummary } from "./loadbalancertlscertificatesummary";
/**
 * Describes a load balancer.
**/
export declare class LoadBalancer extends SpeakeasyBase {
    arn?: string;
    configurationOptions?: Map<string, string>;
    createdAt?: Date;
    dnsName?: string;
    healthCheckPath?: string;
    instanceHealthSummary?: InstanceHealthSummary[];
    instancePort?: number;
    ipAddressType?: IpAddressTypeEnum;
    location?: ResourceLocation;
    name?: string;
    protocol?: LoadBalancerProtocolEnum;
    publicPorts?: number[];
    resourceType?: ResourceTypeEnum;
    state?: LoadBalancerStateEnum;
    supportCode?: string;
    tags?: Tag[];
    tlsCertificateSummaries?: LoadBalancerTlsCertificateSummary[];
}
