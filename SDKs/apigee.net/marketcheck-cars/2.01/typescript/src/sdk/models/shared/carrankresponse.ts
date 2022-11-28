import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CarListingRank } from "./carlistingrank";



// CarRankResponse
/** 
 * Ranking query response
**/
export class CarRankResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=num_ranked" })
  numRanked?: number;

  @SpeakeasyMetadata({ data: "json, name=ranked_listings", elemType: CarListingRank })
  rankedListings?: CarListingRank[];
}
