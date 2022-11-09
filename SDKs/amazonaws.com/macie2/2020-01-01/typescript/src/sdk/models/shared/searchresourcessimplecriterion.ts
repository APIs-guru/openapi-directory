import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchResourcesComparatorEnum } from "./searchresourcescomparatorenum";
import { SearchResourcesSimpleCriterionKeyEnum } from "./searchresourcessimplecriterionkeyenum";


// SearchResourcesSimpleCriterion
/** 
 * Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
**/
export class SearchResourcesSimpleCriterion extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparator" })
  comparator?: SearchResourcesComparatorEnum;

  @Metadata({ data: "json, name=key" })
  key?: SearchResourcesSimpleCriterionKeyEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
