import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SlotTypeFilterNameEnum } from "./slottypefilternameenum";
import { SlotTypeFilterOperatorEnum } from "./slottypefilteroperatorenum";


// SlotTypeFilter
/** 
 * Filters the response from the <code>ListSlotTypes</code> operation.
**/
export class SlotTypeFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: SlotTypeFilterNameEnum;

  @Metadata({ data: "json, name=operator" })
  operator: SlotTypeFilterOperatorEnum;

  @Metadata({ data: "json, name=values" })
  values: string[];
}
