import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function.
**/
export declare class InputLambdaProcessor extends SpeakeasyBase {
    resourceArn: string;
    roleArn: string;
}
