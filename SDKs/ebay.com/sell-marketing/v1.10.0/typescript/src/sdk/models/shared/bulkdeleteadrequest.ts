import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteAdRequest } from "./deleteadrequest";



// BulkDeleteAdRequest
/** 
 * This type defines the fields that the call uses to remove ads in bulk.
**/
export class BulkDeleteAdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: DeleteAdRequest })
  requests?: DeleteAdRequest[];
}
