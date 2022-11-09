import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbLbCookieStickinessPolicy
/** 
 * Contains information about a stickiness policy that was created using <code>CreateLBCookieStickinessPolicy</code>.
**/
export class AwsElbLbCookieStickinessPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=CookieExpirationPeriod" })
  cookieExpirationPeriod?: number;

  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
