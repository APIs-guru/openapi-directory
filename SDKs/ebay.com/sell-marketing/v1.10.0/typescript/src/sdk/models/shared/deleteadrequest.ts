import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteAdRequest
/** 
 * This type defines the fields used in a delete-ad request.
**/
export class DeleteAdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listingId" })
  listingId?: string;
}
