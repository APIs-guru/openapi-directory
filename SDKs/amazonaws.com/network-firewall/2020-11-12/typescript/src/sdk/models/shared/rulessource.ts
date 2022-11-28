import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RulesSourceList } from "./rulessourcelist";
import { StatefulRule } from "./statefulrule";
import { StatelessRulesAndCustomActions } from "./statelessrulesandcustomactions";



// RulesSource
/** 
 * The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules. 
**/
export class RulesSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RulesSourceList" })
  rulesSourceList?: RulesSourceList;

  @SpeakeasyMetadata({ data: "json, name=RulesString" })
  rulesString?: string;

  @SpeakeasyMetadata({ data: "json, name=StatefulRules", elemType: StatefulRule })
  statefulRules?: StatefulRule[];

  @SpeakeasyMetadata({ data: "json, name=StatelessRulesAndCustomActions" })
  statelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
}
