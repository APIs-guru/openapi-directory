import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the permissions settings of the bucket policy for an S3 bucket.
**/
export declare class BucketPolicy extends SpeakeasyBase {
    allowsPublicReadAccess?: boolean;
    allowsPublicWriteAccess?: boolean;
}
