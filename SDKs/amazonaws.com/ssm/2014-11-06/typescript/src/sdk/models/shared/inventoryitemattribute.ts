import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventoryAttributeDataTypeEnum } from "./inventoryattributedatatypeenum";


// InventoryItemAttribute
/** 
 * Attributes are the entries within the inventory item content. It contains name and value.
**/
export class InventoryItemAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataType" })
  dataType: InventoryAttributeDataTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
