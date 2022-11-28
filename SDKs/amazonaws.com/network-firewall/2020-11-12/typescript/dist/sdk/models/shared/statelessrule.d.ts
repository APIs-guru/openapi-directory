import { SpeakeasyBase } from "../../../internal/utils";
import { RuleDefinition } from "./ruledefinition";
/**
 * A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.
**/
export declare class StatelessRule extends SpeakeasyBase {
    priority: number;
    ruleDefinition: RuleDefinition;
}
