import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssertionRule } from "./assertionrule";
import { GatingRule } from "./gatingrule";
/**
 * A safety rule. A safety rule can be an assertion rule or a gating rule.
**/
export declare class Rule extends SpeakeasyBase {
    assertion?: AssertionRule;
    gating?: GatingRule;
}
