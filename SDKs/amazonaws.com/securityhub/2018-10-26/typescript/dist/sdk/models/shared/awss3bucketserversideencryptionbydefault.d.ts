import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the default server-side encryption to apply to new objects in the bucket.
**/
export declare class AwsS3BucketServerSideEncryptionByDefault extends SpeakeasyBase {
    kmsMasterKeyId?: string;
    sseAlgorithm?: string;
}
