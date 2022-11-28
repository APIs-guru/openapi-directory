import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteAdResponse } from "./deleteadresponse";



// BulkDeleteAdResponse
/** 
 * This type defines a container that lists the ads that bulkDeleteAdsByListingId deleted.
**/
export class BulkDeleteAdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: DeleteAdResponse })
  responses?: DeleteAdResponse[];
}
