import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputLambdaProcessorUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.
**/
export class InputLambdaProcessorUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate: string;
}
