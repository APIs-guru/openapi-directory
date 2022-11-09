import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CarListingRank } from "./carlistingrank";


// CarRankResponse
/** 
 * Ranking query response
**/
export class CarRankResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=num_ranked" })
  numRanked?: number;

  @Metadata({ data: "json, name=ranked_listings", elemType: shared.CarListingRank })
  rankedListings?: CarListingRank[];
}
