import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsLambdaFunctionCode
/** 
 * The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.
**/
export class AwsLambdaFunctionCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=S3Key" })
  s3Key?: string;

  @Metadata({ data: "json, name=S3ObjectVersion" })
  s3ObjectVersion?: string;

  @Metadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}
