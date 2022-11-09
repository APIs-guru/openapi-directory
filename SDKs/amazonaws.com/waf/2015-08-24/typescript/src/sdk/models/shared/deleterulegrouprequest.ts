import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRuleGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=RuleGroupId" })
  ruleGroupId: string;
}
