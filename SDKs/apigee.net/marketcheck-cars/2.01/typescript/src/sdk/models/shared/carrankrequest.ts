import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CarRankRequest
/** 
 * Ranking query request
**/
export class CarRankRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listing_ids" })
  listingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ranking_criteria" })
  rankingCriteria?: Map<string, any>;
}
