import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchResourcesComparatorEnum } from "./searchresourcescomparatorenum";
import { SearchResourcesSimpleCriterionKeyEnum } from "./searchresourcessimplecriterionkeyenum";



// SearchResourcesSimpleCriterion
/** 
 * Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
**/
export class SearchResourcesSimpleCriterion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: SearchResourcesComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: SearchResourcesSimpleCriterionKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
