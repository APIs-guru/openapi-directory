import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventoryReference
/** 
 * This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID.
**/
export class InventoryReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @Metadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;
}
