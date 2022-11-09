import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRateBasedRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleId" })
  ruleId: string;
}
