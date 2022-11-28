import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsS3BucketServerSideEncryptionRule } from "./awss3bucketserversideencryptionrule";



// AwsS3BucketServerSideEncryptionConfiguration
/** 
 * The encryption configuration for the S3 bucket.
**/
export class AwsS3BucketServerSideEncryptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: AwsS3BucketServerSideEncryptionRule })
  rules?: AwsS3BucketServerSideEncryptionRule[];
}
