import { SpeakeasyBase } from "../../../internal/utils";
import { AwsElbAppCookieStickinessPolicy } from "./awselbappcookiestickinesspolicy";
import { AwsElbLbCookieStickinessPolicy } from "./awselblbcookiestickinesspolicy";
/**
 * Contains information about the policies for a load balancer.
**/
export declare class AwsElbLoadBalancerPolicies extends SpeakeasyBase {
    appCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[];
    lbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[];
    otherPolicies?: string[];
}
