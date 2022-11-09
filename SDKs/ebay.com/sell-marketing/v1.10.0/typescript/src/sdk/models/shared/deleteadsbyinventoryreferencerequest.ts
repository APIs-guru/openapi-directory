import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteAdsByInventoryReferenceRequest
/** 
 * This type defines the fields needed to delete an ad by its inventory reference ID. You must always supply both inventory_reference_id and inventory_reference_type.
**/
export class DeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @Metadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;
}
