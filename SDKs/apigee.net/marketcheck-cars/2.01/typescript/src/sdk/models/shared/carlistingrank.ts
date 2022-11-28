import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CarListingRank
/** 
 * Ranking query response
**/
export class CarListingRank extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ranked_listing" })
  rankedListing?: Map<string, any>;
}
