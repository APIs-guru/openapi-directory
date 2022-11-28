import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteAdsByInventoryReferenceRequest } from "./deleteadsbyinventoryreferencerequest";



// BulkDeleteAdsByInventoryReferenceRequest
/** 
 * This type defines the request fields that bulkDeleteAdsByInventoryReference uses to delete ads in bulk.
**/
export class BulkDeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: DeleteAdsByInventoryReferenceRequest })
  requests?: DeleteAdsByInventoryReferenceRequest[];
}
