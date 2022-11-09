import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";


export class DeleteRuleGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleGroupArn" })
  ruleGroupArn?: string;

  @Metadata({ data: "json, name=RuleGroupName" })
  ruleGroupName?: string;

  @Metadata({ data: "json, name=Type" })
  type?: RuleGroupTypeEnum;
}
