import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroup } from "./rulegroup";
import { RuleGroupResponse } from "./rulegroupresponse";
export declare class DescribeRuleGroupResponse extends SpeakeasyBase {
    ruleGroup?: RuleGroup;
    ruleGroupResponse: RuleGroupResponse;
    updateToken: string;
}
