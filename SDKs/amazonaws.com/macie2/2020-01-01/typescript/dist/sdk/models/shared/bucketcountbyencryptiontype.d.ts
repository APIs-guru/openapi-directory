import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the number of S3 buckets that use certain types of server-side encryption by default or don't encrypt new objects by default. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.
**/
export declare class BucketCountByEncryptionType extends SpeakeasyBase {
    kmsManaged?: number;
    s3Managed?: number;
    unencrypted?: number;
    unknown?: number;
}
