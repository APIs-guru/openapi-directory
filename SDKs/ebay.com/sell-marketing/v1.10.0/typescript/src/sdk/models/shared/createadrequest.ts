import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateAdRequest
/** 
 * This type defines the fields for the create ad request.
**/
export class CreateAdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidPercentage" })
  bidPercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=listingId" })
  listingId?: string;
}
