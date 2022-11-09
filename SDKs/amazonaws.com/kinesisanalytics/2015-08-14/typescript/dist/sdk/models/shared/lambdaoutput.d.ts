import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf.
**/
export declare class LambdaOutput extends SpeakeasyBase {
    resourceArn: string;
    roleArn: string;
}
