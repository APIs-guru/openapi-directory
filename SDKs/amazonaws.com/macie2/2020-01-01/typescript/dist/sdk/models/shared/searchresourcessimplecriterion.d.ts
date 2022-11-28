import { SpeakeasyBase } from "../../../internal/utils";
import { SearchResourcesComparatorEnum } from "./searchresourcescomparatorenum";
import { SearchResourcesSimpleCriterionKeyEnum } from "./searchresourcessimplecriterionkeyenum";
/**
 * Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
**/
export declare class SearchResourcesSimpleCriterion extends SpeakeasyBase {
    comparator?: SearchResourcesComparatorEnum;
    key?: SearchResourcesSimpleCriterionKeyEnum;
    values?: string[];
}
