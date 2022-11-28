import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FindListingRecommendationRequest
/** 
 * An list of listing ID values for which you want Promoted Listings ad configuration information.
**/
export class FindListingRecommendationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listingIds" })
  listingIds?: string[];
}
