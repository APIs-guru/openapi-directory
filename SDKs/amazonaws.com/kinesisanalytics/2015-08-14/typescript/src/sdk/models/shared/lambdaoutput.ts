import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaOutput
/** 
 * When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. 
**/
export class LambdaOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
