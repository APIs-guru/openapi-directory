import { SpeakeasyBase } from "../../../internal/utils";
import { SearchResourcesComparatorEnum } from "./searchresourcescomparatorenum";
import { SearchResourcesTagCriterionPair } from "./searchresourcestagcriterionpair";
/**
 * Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
**/
export declare class SearchResourcesTagCriterion extends SpeakeasyBase {
    comparator?: SearchResourcesComparatorEnum;
    tagValues?: SearchResourcesTagCriterionPair[];
}
