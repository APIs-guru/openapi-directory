import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchResourcesCriteria } from "./searchresourcescriteria";



// SearchResourcesCriteriaBlock
/** 
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.
**/
export class SearchResourcesCriteriaBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=and", elemType: SearchResourcesCriteria })
  and?: SearchResourcesCriteria[];
}
