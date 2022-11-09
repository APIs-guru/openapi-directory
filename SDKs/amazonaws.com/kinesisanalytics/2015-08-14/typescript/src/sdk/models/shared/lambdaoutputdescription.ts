import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaOutputDescription
/** 
 * For an application output, describes the AWS Lambda function configured as its destination. 
**/
export class LambdaOutputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
