import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { Tag } from "./tag";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";



// RuleGroupResponse
/** 
 * The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 
**/
export class RuleGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Capacity" })
  capacity?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupArn" })
  ruleGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupId" })
  ruleGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupName" })
  ruleGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupStatus" })
  ruleGroupStatus?: ResourceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RuleGroupTypeEnum;
}
