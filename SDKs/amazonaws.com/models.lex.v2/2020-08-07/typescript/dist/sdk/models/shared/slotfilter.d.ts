import { SpeakeasyBase } from "../../../internal/utils";
import { SlotFilterNameEnum } from "./slotfilternameenum";
import { SlotFilterOperatorEnum } from "./slotfilteroperatorenum";
/**
 * Filters the response from the <code>ListSlots</code> operation.
**/
export declare class SlotFilter extends SpeakeasyBase {
    name: SlotFilterNameEnum;
    operator: SlotFilterOperatorEnum;
    values: string[];
}
