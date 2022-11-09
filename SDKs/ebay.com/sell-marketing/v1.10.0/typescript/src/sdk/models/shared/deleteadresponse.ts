import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// DeleteAdResponse
/** 
 * This type defines the fields returned in a delete-ad response.
**/
export class DeleteAdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adId" })
  adId?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=listingId" })
  listingId?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
