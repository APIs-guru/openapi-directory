import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRuleGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=RuleGroupId" })
  ruleGroupId: string;
}
