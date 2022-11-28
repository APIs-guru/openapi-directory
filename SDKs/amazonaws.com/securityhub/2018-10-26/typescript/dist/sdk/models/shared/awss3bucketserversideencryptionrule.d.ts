import { SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketServerSideEncryptionByDefault } from "./awss3bucketserversideencryptionbydefault";
/**
 * An encryption rule to apply to the S3 bucket.
**/
export declare class AwsS3BucketServerSideEncryptionRule extends SpeakeasyBase {
    applyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}
