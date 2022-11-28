import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a tag key or tag key and value pair to use in a tag-based condition that determines whether an S3 object is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.
**/
export declare class TagValuePair extends SpeakeasyBase {
    key?: string;
    value?: string;
}
