import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssertionRule } from "./assertionrule";
import { GatingRule } from "./gatingrule";


export class DescribeSafetyRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssertionRule" })
  assertionRule?: AssertionRule;

  @Metadata({ data: "json, name=GatingRule" })
  gatingRule?: GatingRule;
}
