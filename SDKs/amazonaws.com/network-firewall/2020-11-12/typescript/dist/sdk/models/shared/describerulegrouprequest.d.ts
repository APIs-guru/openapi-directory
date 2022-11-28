import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
export declare class DescribeRuleGroupRequest extends SpeakeasyBase {
    ruleGroupArn?: string;
    ruleGroupName?: string;
    type?: RuleGroupTypeEnum;
}
