import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaOutputDescription
/** 
 * For an application output, describes the AWS Lambda function configured as its destination. 
**/
export class LambdaOutputDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
