import { SpeakeasyBase } from "../../../internal/utils";
import { RulesSourceList } from "./rulessourcelist";
import { StatefulRule } from "./statefulrule";
import { StatelessRulesAndCustomActions } from "./statelessrulesandcustomactions";
/**
 * The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules.
**/
export declare class RulesSource extends SpeakeasyBase {
    rulesSourceList?: RulesSourceList;
    rulesString?: string;
    statefulRules?: StatefulRule[];
    statelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
}
