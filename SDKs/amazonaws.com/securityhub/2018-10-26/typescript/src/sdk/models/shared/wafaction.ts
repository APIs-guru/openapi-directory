import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WafAction
/** 
 * Details about the action that CloudFront or WAF takes when a web request matches the conditions in the rule. 
**/
export class WafAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: string;
}
