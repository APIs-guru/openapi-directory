import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssertionRule } from "./assertionrule";
import { GatingRule } from "./gatingrule";



// Rule
/** 
 * A safety rule. A safety rule can be an assertion rule or a gating rule.
**/
export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ASSERTION" })
  assertion?: AssertionRule;

  @SpeakeasyMetadata({ data: "json, name=GATING" })
  gating?: GatingRule;
}
