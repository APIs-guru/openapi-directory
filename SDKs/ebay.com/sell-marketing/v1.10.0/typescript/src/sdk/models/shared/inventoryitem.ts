import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventoryItem
/** 
 * This type defines the fields for the seller inventory reference IDs (also known as an &quot;SKU&quot; or &quot;custom label&quot;).
**/
export class InventoryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;
}
