import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchResourcesComparatorEnum } from "./searchresourcescomparatorenum";
import { SearchResourcesTagCriterionPair } from "./searchresourcestagcriterionpair";



// SearchResourcesTagCriterion
/** 
 * Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
**/
export class SearchResourcesTagCriterion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: SearchResourcesComparatorEnum;

  @SpeakeasyMetadata({ data: "json, name=tagValues", elemType: SearchResourcesTagCriterionPair })
  tagValues?: SearchResourcesTagCriterionPair[];
}
