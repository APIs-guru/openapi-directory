import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsS3BucketServerSideEncryptionRule } from "./awss3bucketserversideencryptionrule";


// AwsS3BucketServerSideEncryptionConfiguration
/** 
 * The encryption configuration for the S3 bucket.
**/
export class AwsS3BucketServerSideEncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rules", elemType: shared.AwsS3BucketServerSideEncryptionRule })
  rules?: AwsS3BucketServerSideEncryptionRule[];
}
