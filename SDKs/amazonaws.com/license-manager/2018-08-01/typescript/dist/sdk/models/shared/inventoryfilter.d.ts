import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilterConditionEnum } from "./inventoryfilterconditionenum";
/**
 * An inventory filter.
**/
export declare class InventoryFilter extends SpeakeasyBase {
    condition: InventoryFilterConditionEnum;
    name: string;
    value?: string;
}
