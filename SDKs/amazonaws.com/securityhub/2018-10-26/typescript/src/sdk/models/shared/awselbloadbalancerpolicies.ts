import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsElbAppCookieStickinessPolicy } from "./awselbappcookiestickinesspolicy";
import { AwsElbLbCookieStickinessPolicy } from "./awselblbcookiestickinesspolicy";


// AwsElbLoadBalancerPolicies
/** 
 * Contains information about the policies for a load balancer.
**/
export class AwsElbLoadBalancerPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppCookieStickinessPolicies", elemType: shared.AwsElbAppCookieStickinessPolicy })
  appCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[];

  @Metadata({ data: "json, name=LbCookieStickinessPolicies", elemType: shared.AwsElbLbCookieStickinessPolicy })
  lbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[];

  @Metadata({ data: "json, name=OtherPolicies" })
  otherPolicies?: string[];
}
