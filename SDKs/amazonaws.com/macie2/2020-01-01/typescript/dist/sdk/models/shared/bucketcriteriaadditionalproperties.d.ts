import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.
**/
export declare class BucketCriteriaAdditionalProperties extends SpeakeasyBase {
    eq?: string[];
    gt?: number;
    gte?: number;
    lt?: number;
    lte?: number;
    neq?: string[];
    prefix?: string;
}
