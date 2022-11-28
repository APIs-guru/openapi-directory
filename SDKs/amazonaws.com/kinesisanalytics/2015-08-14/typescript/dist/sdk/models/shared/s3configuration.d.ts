import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data.
**/
export declare class S3Configuration extends SpeakeasyBase {
    bucketArn: string;
    fileKey: string;
    roleArn: string;
}
