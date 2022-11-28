import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Ranking query request
**/
export declare class CarRankRequest extends SpeakeasyBase {
    listingIds?: string[];
    rankingCriteria?: Map<string, any>;
}
