import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ListingRecommendation } from "./listingrecommendation";
/**
 * The high-level object used to return a set of Promoted Listings ad recommendations.
**/
export declare class PagedListingRecommendationCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    listingRecommendations?: ListingRecommendation[];
    next?: string;
    offset?: number;
    prev?: string;
    total?: number;
}
