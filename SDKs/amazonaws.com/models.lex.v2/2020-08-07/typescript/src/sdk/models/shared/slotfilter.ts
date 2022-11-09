import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SlotFilterNameEnum } from "./slotfilternameenum";
import { SlotFilterOperatorEnum } from "./slotfilteroperatorenum";


// SlotFilter
/** 
 * Filters the response from the <code>ListSlots</code> operation.
**/
export class SlotFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: SlotFilterNameEnum;

  @Metadata({ data: "json, name=operator" })
  operator: SlotFilterOperatorEnum;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
