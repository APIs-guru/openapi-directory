import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CarListingRank
/** 
 * Ranking query response
**/
export class CarListingRank extends SpeakeasyBase {
  @Metadata({ data: "json, name=ranked_listing" })
  rankedListing?: Map<string, any>;
}
