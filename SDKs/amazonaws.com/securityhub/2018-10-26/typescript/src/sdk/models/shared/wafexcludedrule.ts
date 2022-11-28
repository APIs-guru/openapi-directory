import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WafExcludedRule
/** 
 * Details about a rule to exclude from a rule group.
**/
export class WafExcludedRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleId" })
  ruleId?: string;
}
