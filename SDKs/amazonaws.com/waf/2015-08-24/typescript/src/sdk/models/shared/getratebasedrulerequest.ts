import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRateBasedRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleId" })
  ruleId: string;
}
