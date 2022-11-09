import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MarketingRecommendation } from "./marketingrecommendation";
/**
 * A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.
**/
export declare class ListingRecommendation extends SpeakeasyBase {
    listingId?: string;
    marketing?: MarketingRecommendation;
}
