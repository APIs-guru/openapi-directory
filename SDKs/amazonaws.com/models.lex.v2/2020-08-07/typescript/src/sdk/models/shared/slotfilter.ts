import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotFilterNameEnum } from "./slotfilternameenum";
import { SlotFilterOperatorEnum } from "./slotfilteroperatorenum";



// SlotFilter
/** 
 * Filters the response from the <code>ListSlots</code> operation.
**/
export class SlotFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: SlotFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: SlotFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
