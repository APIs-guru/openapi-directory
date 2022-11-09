import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WafAction } from "./wafaction";
import { WafExcludedRule } from "./wafexcludedrule";
import { WafOverrideAction } from "./wafoverrideaction";


// AwsWafWebAclRule
/** 
 * Details for a rule in an WAF WebACL.
**/
export class AwsWafWebAclRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: WafAction;

  @Metadata({ data: "json, name=ExcludedRules", elemType: shared.WafExcludedRule })
  excludedRules?: WafExcludedRule[];

  @Metadata({ data: "json, name=OverrideAction" })
  overrideAction?: WafOverrideAction;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=RuleId" })
  ruleId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
