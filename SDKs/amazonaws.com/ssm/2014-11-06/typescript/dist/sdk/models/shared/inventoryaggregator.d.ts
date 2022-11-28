import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryGroup } from "./inventorygroup";
/**
 * Specifies the inventory type and attribute for the aggregation execution.
**/
export declare class InventoryAggregator extends SpeakeasyBase {
    aggregators?: InventoryAggregator[];
    expression?: string;
    groups?: InventoryGroup[];
}
