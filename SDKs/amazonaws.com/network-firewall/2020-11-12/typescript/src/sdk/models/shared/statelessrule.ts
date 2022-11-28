import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleDefinition } from "./ruledefinition";



// StatelessRule
/** 
 * A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.
**/
export class StatelessRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=RuleDefinition" })
  ruleDefinition: RuleDefinition;
}
