import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment package directly.
**/
export declare class AwsLambdaFunctionCode extends SpeakeasyBase {
    s3Bucket?: string;
    s3Key?: string;
    s3ObjectVersion?: string;
    zipFile?: string;
}
