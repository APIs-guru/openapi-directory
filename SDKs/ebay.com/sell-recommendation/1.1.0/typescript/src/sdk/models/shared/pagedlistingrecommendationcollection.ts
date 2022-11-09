import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListingRecommendation } from "./listingrecommendation";


// PagedListingRecommendationCollection
/** 
 * The high-level object used to return a set of Promoted Listings ad recommendations.
**/
export class PagedListingRecommendationCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=listingRecommendations", elemType: shared.ListingRecommendation })
  listingRecommendations?: ListingRecommendation[];

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
