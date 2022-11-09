import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * For a SQL-based Kinesis Data Analytics application's output, describes the AWS Lambda function that is configured as its destination.
**/
export declare class LambdaOutputDescription extends SpeakeasyBase {
    resourceArn: string;
    roleArn?: string;
}
