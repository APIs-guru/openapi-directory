import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RulesSourceList } from "./rulessourcelist";
import { StatefulRule } from "./statefulrule";
import { StatelessRulesAndCustomActions } from "./statelessrulesandcustomactions";


// RulesSource
/** 
 * The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single <code>RulesSource</code>. You can use an instance of this for either stateless rules or stateful rules. 
**/
export class RulesSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=RulesSourceList" })
  rulesSourceList?: RulesSourceList;

  @Metadata({ data: "json, name=RulesString" })
  rulesString?: string;

  @Metadata({ data: "json, name=StatefulRules", elemType: shared.StatefulRule })
  statefulRules?: StatefulRule[];

  @Metadata({ data: "json, name=StatelessRulesAndCustomActions" })
  statelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
}
