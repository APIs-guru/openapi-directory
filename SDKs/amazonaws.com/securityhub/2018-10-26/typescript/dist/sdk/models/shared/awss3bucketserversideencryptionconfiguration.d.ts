import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketServerSideEncryptionRule } from "./awss3bucketserversideencryptionrule";
/**
 * The encryption configuration for the S3 bucket.
**/
export declare class AwsS3BucketServerSideEncryptionConfiguration extends SpeakeasyBase {
    rules?: AwsS3BucketServerSideEncryptionRule[];
}
