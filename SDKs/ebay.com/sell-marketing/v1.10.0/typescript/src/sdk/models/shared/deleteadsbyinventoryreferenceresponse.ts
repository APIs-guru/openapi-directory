import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";



// DeleteAdsByInventoryReferenceResponse
/** 
 * This type defines the fields returned by request to delete a set of ads by inventory reference ID.
**/
export class DeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adIds" })
  adIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];

  @SpeakeasyMetadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
