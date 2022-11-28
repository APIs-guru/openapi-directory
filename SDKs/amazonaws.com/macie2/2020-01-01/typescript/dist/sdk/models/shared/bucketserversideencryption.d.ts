import { SpeakeasyBase } from "../../../internal/utils";
import { TypeEnum } from "./typeenum";
/**
 * Provides information about the default server-side encryption settings for an S3 bucket. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.
**/
export declare class BucketServerSideEncryption extends SpeakeasyBase {
    kmsMasterKeyId?: string;
    type?: TypeEnum;
}
