import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateAdsByInventoryReferenceRequest
/** 
 * This type defines the fields needed to create ads by inventory reference ID request.
**/
export class CreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidPercentage" })
  bidPercentage?: string;

  @Metadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @Metadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;
}
