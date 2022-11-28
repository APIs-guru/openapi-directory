import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAction } from "./customaction";
import { StatelessRule } from "./statelessrule";
/**
 * Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules.
**/
export declare class StatelessRulesAndCustomActions extends SpeakeasyBase {
    customActions?: CustomAction[];
    statelessRules: StatelessRule[];
}
