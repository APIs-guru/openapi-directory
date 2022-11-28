import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  <p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p>
**/
export declare class TagCriterionPairForJob extends SpeakeasyBase {
    key?: string;
    value?: string;
}
