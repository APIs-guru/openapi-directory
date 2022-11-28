import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account.
**/
export declare class S3BucketDefinitionForJob extends SpeakeasyBase {
    accountId: string;
    buckets: string[];
}
