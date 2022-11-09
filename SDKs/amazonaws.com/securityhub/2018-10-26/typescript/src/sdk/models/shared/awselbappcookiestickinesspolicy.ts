import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElbAppCookieStickinessPolicy
/** 
 * Contains information about a stickiness policy that was created using <code>CreateAppCookieStickinessPolicy</code>.
**/
export class AwsElbAppCookieStickinessPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=CookieName" })
  cookieName?: string;

  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
