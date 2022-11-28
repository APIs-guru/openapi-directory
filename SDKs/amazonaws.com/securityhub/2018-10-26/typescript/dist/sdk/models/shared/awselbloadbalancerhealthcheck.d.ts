import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the health checks that are conducted on the load balancer.
**/
export declare class AwsElbLoadBalancerHealthCheck extends SpeakeasyBase {
    healthyThreshold?: number;
    interval?: number;
    target?: string;
    timeout?: number;
    unhealthyThreshold?: number;
}
