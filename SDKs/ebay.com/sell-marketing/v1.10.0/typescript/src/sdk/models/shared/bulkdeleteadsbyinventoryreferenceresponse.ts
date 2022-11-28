import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteAdsByInventoryReferenceResponse } from "./deleteadsbyinventoryreferenceresponse";



// BulkDeleteAdsByInventoryReferenceResponse
/** 
 * This type defines a container that lists the ads that bulkDeleteAdsByInventoryReference deleted.
**/
export class BulkDeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: DeleteAdsByInventoryReferenceResponse })
  responses?: DeleteAdsByInventoryReferenceResponse[];
}
