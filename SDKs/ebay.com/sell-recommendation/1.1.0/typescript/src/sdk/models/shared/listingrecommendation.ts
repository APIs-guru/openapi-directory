import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MarketingRecommendation } from "./marketingrecommendation";


// ListingRecommendation
/** 
 * A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.
**/
export class ListingRecommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=listingId" })
  listingId?: string;

  @Metadata({ data: "json, name=marketing" })
  marketing?: MarketingRecommendation;
}
