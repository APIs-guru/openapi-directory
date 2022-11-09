import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchResourcesTagCriterionPair
/** 
 * Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based filter condition for a query. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based filter conditions.
**/
export class SearchResourcesTagCriterionPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
