import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based filter condition for a query. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based filter conditions.
**/
export declare class SearchResourcesTagCriterionPair extends SpeakeasyBase {
    key?: string;
    value?: string;
}
