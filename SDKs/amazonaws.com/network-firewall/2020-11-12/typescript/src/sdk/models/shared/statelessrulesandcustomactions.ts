import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomAction } from "./customaction";
import { StatelessRule } from "./statelessrule";



// StatelessRulesAndCustomActions
/** 
 * Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules. 
**/
export class StatelessRulesAndCustomActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomActions", elemType: CustomAction })
  customActions?: CustomAction[];

  @SpeakeasyMetadata({ data: "json, name=StatelessRules", elemType: StatelessRule })
  statelessRules: StatelessRule[];
}
