import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WafAction
/** 
 * Details about the action that CloudFront or WAF takes when a web request matches the conditions in the rule. 
**/
export class WafAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
