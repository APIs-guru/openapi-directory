import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryItemAttribute } from "./inventoryitemattribute";
/**
 * The inventory item schema definition. Users can use this to compose inventory query filters.
**/
export declare class InventoryItemSchema extends SpeakeasyBase {
    attributes: InventoryItemAttribute[];
    displayName?: string;
    typeName: string;
    version?: string;
}
