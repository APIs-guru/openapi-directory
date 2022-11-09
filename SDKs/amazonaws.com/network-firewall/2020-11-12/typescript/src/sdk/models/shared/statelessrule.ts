import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleDefinition } from "./ruledefinition";


// StatelessRule
/** 
 * A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.
**/
export class StatelessRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Priority" })
  priority: number;

  @Metadata({ data: "json, name=RuleDefinition" })
  ruleDefinition: RuleDefinition;
}
