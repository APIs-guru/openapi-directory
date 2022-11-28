import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream.
**/
export declare class InputLambdaProcessorDescription extends SpeakeasyBase {
    resourceArn: string;
    roleArn?: string;
}
