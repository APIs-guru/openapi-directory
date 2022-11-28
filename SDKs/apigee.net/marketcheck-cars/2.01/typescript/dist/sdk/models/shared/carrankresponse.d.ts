import { SpeakeasyBase } from "../../../internal/utils";
import { CarListingRank } from "./carlistingrank";
/**
 * Ranking query response
**/
export declare class CarRankResponse extends SpeakeasyBase {
    numRanked?: number;
    rankedListings?: CarListingRank[];
}
