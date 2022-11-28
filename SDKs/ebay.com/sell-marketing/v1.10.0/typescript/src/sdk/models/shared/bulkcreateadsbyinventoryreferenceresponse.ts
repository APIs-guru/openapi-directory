import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAdsByInventoryReferenceResponse } from "./createadsbyinventoryreferenceresponse";



// BulkCreateAdsByInventoryReferenceResponse
/** 
 * This type defines the response fields used by the bulkCreateAdsByInventoryReference method.
**/
export class BulkCreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: CreateAdsByInventoryReferenceResponse })
  responses?: CreateAdsByInventoryReferenceResponse[];
}
