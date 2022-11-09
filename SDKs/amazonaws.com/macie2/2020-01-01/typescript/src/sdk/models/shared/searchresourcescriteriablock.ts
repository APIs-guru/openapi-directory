import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchResourcesCriteria } from "./searchresourcescriteria";


// SearchResourcesCriteriaBlock
/** 
 * Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.
**/
export class SearchResourcesCriteriaBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=and", elemType: shared.SearchResourcesCriteria })
  and?: SearchResourcesCriteria[];
}
