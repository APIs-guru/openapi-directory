import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateAdsByInventoryReferenceResponse } from "./createadsbyinventoryreferenceresponse";


// BulkCreateAdsByInventoryReferenceResponse
/** 
 * This type defines the response fields used by the bulkCreateAdsByInventoryReference method.
**/
export class BulkCreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.CreateAdsByInventoryReferenceResponse })
  responses?: CreateAdsByInventoryReferenceResponse[];
}
