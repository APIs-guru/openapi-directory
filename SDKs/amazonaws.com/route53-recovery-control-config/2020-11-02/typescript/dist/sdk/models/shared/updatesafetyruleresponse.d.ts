import { SpeakeasyBase } from "../../../internal/utils";
import { AssertionRule } from "./assertionrule";
import { GatingRule } from "./gatingrule";
export declare class UpdateSafetyRuleResponse extends SpeakeasyBase {
    assertionRule?: AssertionRule;
    gatingRule?: GatingRule;
}
