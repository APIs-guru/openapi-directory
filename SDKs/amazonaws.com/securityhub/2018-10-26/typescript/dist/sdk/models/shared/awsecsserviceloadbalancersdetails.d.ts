import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a load balancer that the service uses.
**/
export declare class AwsEcsServiceLoadBalancersDetails extends SpeakeasyBase {
    containerName?: string;
    containerPort?: number;
    loadBalancerName?: string;
    targetGroupArn?: string;
}
