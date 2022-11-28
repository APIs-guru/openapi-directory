import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketingRecommendation } from "./marketingrecommendation";



// ListingRecommendation
/** 
 * A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.
**/
export class ListingRecommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listingId" })
  listingId?: string;

  @SpeakeasyMetadata({ data: "json, name=marketing" })
  marketing?: MarketingRecommendation;
}
