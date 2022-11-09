import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateAdRequest
/** 
 * This type defines the fields for the create ad request.
**/
export class CreateAdRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidPercentage" })
  bidPercentage?: string;

  @Metadata({ data: "json, name=listingId" })
  listingId?: string;
}
