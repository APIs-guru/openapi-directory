import { SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeFilterNameEnum } from "./slottypefilternameenum";
import { SlotTypeFilterOperatorEnum } from "./slottypefilteroperatorenum";
/**
 * Filters the response from the <code>ListSlotTypes</code> operation.
**/
export declare class SlotTypeFilter extends SpeakeasyBase {
    name: SlotTypeFilterNameEnum;
    operator: SlotTypeFilterOperatorEnum;
    values: string[];
}
