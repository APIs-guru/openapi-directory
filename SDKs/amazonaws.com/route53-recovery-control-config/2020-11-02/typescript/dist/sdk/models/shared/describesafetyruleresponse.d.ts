import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssertionRule } from "./assertionrule";
import { GatingRule } from "./gatingrule";
export declare class DescribeSafetyRuleResponse extends SpeakeasyBase {
    assertionRule?: AssertionRule;
    gatingRule?: GatingRule;
}
