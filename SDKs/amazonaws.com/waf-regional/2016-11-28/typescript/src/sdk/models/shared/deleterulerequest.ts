import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=RuleId" })
  ruleId: string;
}
