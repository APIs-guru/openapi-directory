import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeleteAdsByInventoryReferenceRequest } from "./deleteadsbyinventoryreferencerequest";


// BulkDeleteAdsByInventoryReferenceRequest
/** 
 * This type defines the request fields that bulkDeleteAdsByInventoryReference uses to delete ads in bulk.
**/
export class BulkDeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.DeleteAdsByInventoryReferenceRequest })
  requests?: DeleteAdsByInventoryReferenceRequest[];
}
