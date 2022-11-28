import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaOutputUpdate
/** 
 * When you update an SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function that is configured as the destination.
**/
export class LambdaOutputUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate: string;
}
