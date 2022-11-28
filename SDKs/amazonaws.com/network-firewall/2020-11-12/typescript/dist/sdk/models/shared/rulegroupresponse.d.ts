import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { Tag } from "./tag";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
/**
 * The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.
**/
export declare class RuleGroupResponse extends SpeakeasyBase {
    capacity?: number;
    description?: string;
    ruleGroupArn: string;
    ruleGroupId: string;
    ruleGroupName: string;
    ruleGroupStatus?: ResourceStatusEnum;
    tags?: Tag[];
    type?: RuleGroupTypeEnum;
}
