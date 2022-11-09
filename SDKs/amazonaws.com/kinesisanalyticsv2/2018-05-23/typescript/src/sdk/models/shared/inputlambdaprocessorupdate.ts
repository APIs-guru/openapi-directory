import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputLambdaProcessorUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.
**/
export class InputLambdaProcessorUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate: string;
}
