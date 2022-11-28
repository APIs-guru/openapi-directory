import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a load balancer listener.
**/
export declare class AwsElbLoadBalancerListener extends SpeakeasyBase {
    instancePort?: number;
    instanceProtocol?: string;
    loadBalancerPort?: number;
    protocol?: string;
    sslCertificateId?: string;
}
