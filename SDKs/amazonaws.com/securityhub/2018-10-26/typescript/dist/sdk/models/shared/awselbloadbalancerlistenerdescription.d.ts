import { SpeakeasyBase } from "../../../internal/utils";
import { AwsElbLoadBalancerListener } from "./awselbloadbalancerlistener";
/**
 * Lists the policies that are enabled for a load balancer listener.
**/
export declare class AwsElbLoadBalancerListenerDescription extends SpeakeasyBase {
    listener?: AwsElbLoadBalancerListener;
    policyNames?: string[];
}
