import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssertionRule } from "./assertionrule";
import { GatingRule } from "./gatingrule";


// Rule
/** 
 * A safety rule. A safety rule can be an assertion rule or a gating rule.
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=ASSERTION" })
  assertion?: AssertionRule;

  @Metadata({ data: "json, name=GATING" })
  gating?: GatingRule;
}
