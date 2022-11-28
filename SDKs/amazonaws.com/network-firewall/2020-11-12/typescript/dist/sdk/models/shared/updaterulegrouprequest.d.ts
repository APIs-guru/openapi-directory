import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroup } from "./rulegroup";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
export declare class UpdateRuleGroupRequest extends SpeakeasyBase {
    description?: string;
    dryRun?: boolean;
    ruleGroup?: RuleGroup;
    ruleGroupArn?: string;
    ruleGroupName?: string;
    rules?: string;
    type?: RuleGroupTypeEnum;
    updateToken: string;
}
