import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAdRequest } from "./createadrequest";



// BulkCreateAdRequest
/** 
 * This type defines the fields for the create ads in bulk by listing IDs.
**/
export class BulkCreateAdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: CreateAdRequest })
  requests?: CreateAdRequest[];
}
