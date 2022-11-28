import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListingRecommendation } from "./listingrecommendation";



// PagedListingRecommendationCollection
/** 
 * The high-level object used to return a set of Promoted Listings ad recommendations.
**/
export class PagedListingRecommendationCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=listingRecommendations", elemType: ListingRecommendation })
  listingRecommendations?: ListingRecommendation[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
