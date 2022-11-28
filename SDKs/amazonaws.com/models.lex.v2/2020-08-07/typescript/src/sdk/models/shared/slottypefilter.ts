import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeFilterNameEnum } from "./slottypefilternameenum";
import { SlotTypeFilterOperatorEnum } from "./slottypefilteroperatorenum";



// SlotTypeFilter
/** 
 * Filters the response from the <code>ListSlotTypes</code> operation.
**/
export class SlotTypeFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: SlotTypeFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator: SlotTypeFilterOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values: string[];
}
