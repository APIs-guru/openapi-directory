import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are uploaded to the buckets.
**/
export declare class BucketCountPolicyAllowsUnencryptedObjectUploads extends SpeakeasyBase {
    allowsUnencryptedObjectUploads?: number;
    deniesUnencryptedObjectUploads?: number;
    unknown?: number;
}
