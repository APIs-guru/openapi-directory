import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateAdsByInventoryReferenceRequest
/** 
 * This type defines the fields needed to create ads by inventory reference ID request.
**/
export class CreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidPercentage" })
  bidPercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;
}
