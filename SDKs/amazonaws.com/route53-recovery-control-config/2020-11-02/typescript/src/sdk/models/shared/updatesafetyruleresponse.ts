import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssertionRule } from "./assertionrule";
import { GatingRule } from "./gatingrule";



export class UpdateSafetyRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssertionRule" })
  assertionRule?: AssertionRule;

  @SpeakeasyMetadata({ data: "json, name=GatingRule" })
  gatingRule?: GatingRule;
}
