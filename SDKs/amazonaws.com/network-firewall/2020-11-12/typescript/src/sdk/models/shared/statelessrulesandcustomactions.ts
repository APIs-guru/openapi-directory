import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomAction } from "./customaction";
import { StatelessRule } from "./statelessrule";


// StatelessRulesAndCustomActions
/** 
 * Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules. 
**/
export class StatelessRulesAndCustomActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomActions", elemType: shared.CustomAction })
  customActions?: CustomAction[];

  @Metadata({ data: "json, name=StatelessRules", elemType: shared.StatelessRule })
  statelessRules: StatelessRule[];
}
