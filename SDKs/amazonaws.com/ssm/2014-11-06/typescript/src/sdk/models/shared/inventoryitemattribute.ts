import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryAttributeDataTypeEnum } from "./inventoryattributedatatypeenum";



// InventoryItemAttribute
/** 
 * Attributes are the entries within the inventory item content. It contains name and value.
**/
export class InventoryItemAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType: InventoryAttributeDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
