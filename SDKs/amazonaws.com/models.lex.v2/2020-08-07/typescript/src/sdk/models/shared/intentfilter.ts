import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntentFilterNameEnum } from "./intentfilternameenum";
import { IntentFilterOperatorEnum } from "./intentfilteroperatorenum";



// IntentFilter
/** 
 * Filters the response from the <code>ListIntents</code> operation.
**/
export class IntentFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: IntentFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: IntentFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
