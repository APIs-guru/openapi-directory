import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputLambdaProcessorDescription
/** 
 * For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream.
**/
export class InputLambdaProcessorDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
