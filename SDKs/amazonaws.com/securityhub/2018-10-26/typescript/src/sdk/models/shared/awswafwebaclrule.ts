import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WafAction } from "./wafaction";
import { WafExcludedRule } from "./wafexcludedrule";
import { WafOverrideAction } from "./wafoverrideaction";



// AwsWafWebAclRule
/** 
 * Details for a rule in an WAF WebACL.
**/
export class AwsWafWebAclRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: WafAction;

  @SpeakeasyMetadata({ data: "json, name=ExcludedRules", elemType: WafExcludedRule })
  excludedRules?: WafExcludedRule[];

  @SpeakeasyMetadata({ data: "json, name=OverrideAction" })
  overrideAction?: WafOverrideAction;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=RuleId" })
  ruleId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
