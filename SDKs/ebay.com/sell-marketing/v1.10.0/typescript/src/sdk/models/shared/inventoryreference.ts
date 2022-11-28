import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventoryReference
/** 
 * This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID.
**/
export class InventoryReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;
}
