import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsElbAppCookieStickinessPolicy } from "./awselbappcookiestickinesspolicy";
import { AwsElbLbCookieStickinessPolicy } from "./awselblbcookiestickinesspolicy";



// AwsElbLoadBalancerPolicies
/** 
 * Contains information about the policies for a load balancer.
**/
export class AwsElbLoadBalancerPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppCookieStickinessPolicies", elemType: AwsElbAppCookieStickinessPolicy })
  appCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[];

  @SpeakeasyMetadata({ data: "json, name=LbCookieStickinessPolicies", elemType: AwsElbLbCookieStickinessPolicy })
  lbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[];

  @SpeakeasyMetadata({ data: "json, name=OtherPolicies" })
  otherPolicies?: string[];
}
