import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeleteAdsByInventoryReferenceResponse } from "./deleteadsbyinventoryreferenceresponse";


// BulkDeleteAdsByInventoryReferenceResponse
/** 
 * This type defines a container that lists the ads that bulkDeleteAdsByInventoryReference deleted.
**/
export class BulkDeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.DeleteAdsByInventoryReferenceResponse })
  responses?: DeleteAdsByInventoryReferenceResponse[];
}
