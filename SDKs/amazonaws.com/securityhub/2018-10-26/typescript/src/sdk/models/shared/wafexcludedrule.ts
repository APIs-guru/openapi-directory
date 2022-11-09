import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WafExcludedRule
/** 
 * Details about a rule to exclude from a rule group.
**/
export class WafExcludedRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleId" })
  ruleId?: string;
}
