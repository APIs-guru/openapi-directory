import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeleteAdRequest } from "./deleteadrequest";


// BulkDeleteAdRequest
/** 
 * This type defines the fields that the call uses to remove ads in bulk.
**/
export class BulkDeleteAdRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.DeleteAdRequest })
  requests?: DeleteAdRequest[];
}
