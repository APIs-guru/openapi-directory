import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeleteAdResponse } from "./deleteadresponse";


// BulkDeleteAdResponse
/** 
 * This type defines a container that lists the ads that bulkDeleteAdsByListingId deleted.
**/
export class BulkDeleteAdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.DeleteAdResponse })
  responses?: DeleteAdResponse[];
}
