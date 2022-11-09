import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CarRankRequest
/** 
 * Ranking query request
**/
export class CarRankRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=listing_ids" })
  listingIds?: string[];

  @Metadata({ data: "json, name=ranking_criteria" })
  rankingCriteria?: Map<string, any>;
}
