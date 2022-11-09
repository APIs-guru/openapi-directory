import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteAdRequest
/** 
 * This type defines the fields used in a delete-ad request.
**/
export class DeleteAdRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=listingId" })
  listingId?: string;
}
