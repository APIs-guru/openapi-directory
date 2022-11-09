import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleId" })
  ruleId: string;
}
