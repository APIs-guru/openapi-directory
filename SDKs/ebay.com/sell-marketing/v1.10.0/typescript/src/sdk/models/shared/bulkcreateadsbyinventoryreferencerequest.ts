import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAdsByInventoryReferenceRequest } from "./createadsbyinventoryreferencerequest";



// BulkCreateAdsByInventoryReferenceRequest
/** 
 * This type defines the fields used to create ads in bulk by inventory reference IDs.
**/
export class BulkCreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: CreateAdsByInventoryReferenceRequest })
  requests?: CreateAdsByInventoryReferenceRequest[];
}
