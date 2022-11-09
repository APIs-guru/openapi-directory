import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { Tag } from "./tag";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";


// RuleGroupResponse
/** 
 * The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 
**/
export class RuleGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Capacity" })
  capacity?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=RuleGroupArn" })
  ruleGroupArn: string;

  @Metadata({ data: "json, name=RuleGroupId" })
  ruleGroupId: string;

  @Metadata({ data: "json, name=RuleGroupName" })
  ruleGroupName: string;

  @Metadata({ data: "json, name=RuleGroupStatus" })
  ruleGroupStatus?: ResourceStatusEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Type" })
  type?: RuleGroupTypeEnum;
}
