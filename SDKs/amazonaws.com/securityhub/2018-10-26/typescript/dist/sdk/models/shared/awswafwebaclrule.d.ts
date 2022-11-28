import { SpeakeasyBase } from "../../../internal/utils";
import { WafAction } from "./wafaction";
import { WafExcludedRule } from "./wafexcludedrule";
import { WafOverrideAction } from "./wafoverrideaction";
/**
 * Details for a rule in an WAF WebACL.
**/
export declare class AwsWafWebAclRule extends SpeakeasyBase {
    action?: WafAction;
    excludedRules?: WafExcludedRule[];
    overrideAction?: WafOverrideAction;
    priority?: number;
    ruleId?: string;
    type?: string;
}
