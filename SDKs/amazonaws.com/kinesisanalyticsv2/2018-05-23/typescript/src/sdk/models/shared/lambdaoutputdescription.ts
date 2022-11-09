import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaOutputDescription
/** 
 * For a SQL-based Kinesis Data Analytics application's output, describes the AWS Lambda function that is configured as its destination. 
**/
export class LambdaOutputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
