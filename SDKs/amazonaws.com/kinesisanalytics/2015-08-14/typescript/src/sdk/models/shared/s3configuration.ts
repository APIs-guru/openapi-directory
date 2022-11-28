import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Configuration
/** 
 * Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data.
**/
export class S3Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketARN" })
  bucketArn: string;

  @SpeakeasyMetadata({ data: "json, name=FileKey" })
  fileKey: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
