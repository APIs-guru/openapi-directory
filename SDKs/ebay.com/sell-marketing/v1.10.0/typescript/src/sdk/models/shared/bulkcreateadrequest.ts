import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateAdRequest } from "./createadrequest";


// BulkCreateAdRequest
/** 
 * This type defines the fields for the create ads in bulk by listing IDs.
**/
export class BulkCreateAdRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.CreateAdRequest })
  requests?: CreateAdRequest[];
}
