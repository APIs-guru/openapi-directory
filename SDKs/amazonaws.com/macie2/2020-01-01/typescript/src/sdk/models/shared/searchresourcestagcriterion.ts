import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchResourcesComparatorEnum } from "./searchresourcescomparatorenum";
import { SearchResourcesTagCriterionPair } from "./searchresourcestagcriterionpair";


// SearchResourcesTagCriterion
/** 
 * Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
**/
export class SearchResourcesTagCriterion extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparator" })
  comparator?: SearchResourcesComparatorEnum;

  @Metadata({ data: "json, name=tagValues", elemType: shared.SearchResourcesTagCriterionPair })
  tagValues?: SearchResourcesTagCriterionPair[];
}
