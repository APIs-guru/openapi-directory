import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateAdsByInventoryReferenceRequest } from "./createadsbyinventoryreferencerequest";


// BulkCreateAdsByInventoryReferenceRequest
/** 
 * This type defines the fields used to create ads in bulk by inventory reference IDs.
**/
export class BulkCreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.CreateAdsByInventoryReferenceRequest })
  requests?: CreateAdsByInventoryReferenceRequest[];
}
