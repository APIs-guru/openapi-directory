import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FindListingRecommendationRequest
/** 
 * An list of listing ID values for which you want Promoted Listings ad configuration information.
**/
export class FindListingRecommendationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=listingIds" })
  listingIds?: string[];
}
