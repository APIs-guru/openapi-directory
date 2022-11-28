import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";



// DeleteAdResponse
/** 
 * This type defines the fields returned in a delete-ad response.
**/
export class DeleteAdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adId" })
  adId?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];

  @SpeakeasyMetadata({ data: "json, name=listingId" })
  listingId?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
