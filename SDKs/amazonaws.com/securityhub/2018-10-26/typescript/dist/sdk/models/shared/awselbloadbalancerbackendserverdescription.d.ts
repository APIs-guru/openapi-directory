import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the configuration of an EC2 instance for the load balancer.
**/
export declare class AwsElbLoadBalancerBackendServerDescription extends SpeakeasyBase {
    instancePort?: number;
    policyNames?: string[];
}
