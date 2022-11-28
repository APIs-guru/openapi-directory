import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroup } from "./rulegroup";
import { Tag } from "./tag";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
export declare class CreateRuleGroupRequest extends SpeakeasyBase {
    capacity: number;
    description?: string;
    dryRun?: boolean;
    ruleGroup?: RuleGroup;
    ruleGroupName: string;
    rules?: string;
    tags?: Tag[];
    type: RuleGroupTypeEnum;
}
