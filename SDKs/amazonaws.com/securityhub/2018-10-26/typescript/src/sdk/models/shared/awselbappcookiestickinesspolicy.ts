import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElbAppCookieStickinessPolicy
/** 
 * Contains information about a stickiness policy that was created using <code>CreateAppCookieStickinessPolicy</code>.
**/
export class AwsElbAppCookieStickinessPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CookieName" })
  cookieName?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
