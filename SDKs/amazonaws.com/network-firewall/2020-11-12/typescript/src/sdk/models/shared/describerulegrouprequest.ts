import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";



export class DescribeRuleGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleGroupArn" })
  ruleGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupName" })
  ruleGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RuleGroupTypeEnum;
}
