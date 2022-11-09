import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IntentFilterNameEnum } from "./intentfilternameenum";
import { IntentFilterOperatorEnum } from "./intentfilteroperatorenum";


// IntentFilter
/** 
 * Filters the response from the <code>ListIntents</code> operation.
**/
export class IntentFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: IntentFilterNameEnum;

  @Metadata({ data: "json, name=operator" })
  operator: IntentFilterOperatorEnum;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
