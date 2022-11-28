import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbLbCookieStickinessPolicy
/** 
 * Contains information about a stickiness policy that was created using <code>CreateLBCookieStickinessPolicy</code>.
**/
export class AwsElbLbCookieStickinessPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CookieExpirationPeriod" })
  cookieExpirationPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
