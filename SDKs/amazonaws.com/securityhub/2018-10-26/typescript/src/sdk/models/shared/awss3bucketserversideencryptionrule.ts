import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsS3BucketServerSideEncryptionByDefault } from "./awss3bucketserversideencryptionbydefault";


// AwsS3BucketServerSideEncryptionRule
/** 
 * An encryption rule to apply to the S3 bucket.
**/
export class AwsS3BucketServerSideEncryptionRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplyServerSideEncryptionByDefault" })
  applyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}
