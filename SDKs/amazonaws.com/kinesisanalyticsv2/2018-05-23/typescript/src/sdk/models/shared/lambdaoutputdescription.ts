import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaOutputDescription
/** 
 * For a SQL-based Kinesis Data Analytics application's output, describes the AWS Lambda function that is configured as its destination. 
**/
export class LambdaOutputDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
