import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputLambdaProcessor
/** 
 * An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application. 
**/
export class InputLambdaProcessor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;
}
