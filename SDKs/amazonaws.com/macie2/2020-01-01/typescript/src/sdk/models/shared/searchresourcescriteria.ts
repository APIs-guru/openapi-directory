import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchResourcesSimpleCriterion } from "./searchresourcessimplecriterion";
import { SearchResourcesTagCriterion } from "./searchresourcestagcriterion";



// SearchResourcesCriteria
/** 
 * Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.
**/
export class SearchResourcesCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simpleCriterion" })
  simpleCriterion?: SearchResourcesSimpleCriterion;

  @SpeakeasyMetadata({ data: "json, name=tagCriterion" })
  tagCriterion?: SearchResourcesTagCriterion;
}
