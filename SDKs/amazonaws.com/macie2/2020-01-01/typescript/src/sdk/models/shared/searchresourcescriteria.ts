import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchResourcesSimpleCriterion } from "./searchresourcessimplecriterion";
import { SearchResourcesTagCriterion } from "./searchresourcestagcriterion";


// SearchResourcesCriteria
/** 
 * Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.
**/
export class SearchResourcesCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=simpleCriterion" })
  simpleCriterion?: SearchResourcesSimpleCriterion;

  @Metadata({ data: "json, name=tagCriterion" })
  tagCriterion?: SearchResourcesTagCriterion;
}
