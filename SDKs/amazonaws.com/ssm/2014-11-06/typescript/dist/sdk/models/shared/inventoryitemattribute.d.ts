import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryAttributeDataTypeEnum } from "./inventoryattributedatatypeenum";
/**
 * Attributes are the entries within the inventory item content. It contains name and value.
**/
export declare class InventoryItemAttribute extends SpeakeasyBase {
    dataType: InventoryAttributeDataTypeEnum;
    name: string;
}
