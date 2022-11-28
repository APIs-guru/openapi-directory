import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleId" })
  ruleId: string;
}
