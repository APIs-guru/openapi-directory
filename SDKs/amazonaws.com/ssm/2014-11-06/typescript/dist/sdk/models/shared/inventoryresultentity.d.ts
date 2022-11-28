import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryResultItem } from "./inventoryresultitem";
/**
 * Inventory query results.
**/
export declare class InventoryResultEntity extends SpeakeasyBase {
    data?: Map<string, InventoryResultItem>;
    id?: string;
}
