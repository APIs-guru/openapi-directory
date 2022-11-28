import { SpeakeasyBase } from "../../../internal/utils";
import { SearchResourcesSimpleCriterion } from "./searchresourcessimplecriterion";
import { SearchResourcesTagCriterion } from "./searchresourcestagcriterion";
/**
 * Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.
**/
export declare class SearchResourcesCriteria extends SpeakeasyBase {
    simpleCriterion?: SearchResourcesSimpleCriterion;
    tagCriterion?: SearchResourcesTagCriterion;
}
