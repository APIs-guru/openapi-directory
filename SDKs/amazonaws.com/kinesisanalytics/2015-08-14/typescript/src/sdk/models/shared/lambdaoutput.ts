import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaOutput
/** 
 * When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. 
**/
export class LambdaOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
