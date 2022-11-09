import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=RuleId" })
  ruleId: string;
}
