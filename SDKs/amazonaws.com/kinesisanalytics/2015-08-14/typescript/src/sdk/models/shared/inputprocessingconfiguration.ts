import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputLambdaProcessor } from "./inputlambdaprocessor";



// InputProcessingConfiguration
/** 
 * Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
**/
export class InputProcessingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputLambdaProcessor" })
  inputLambdaProcessor: InputLambdaProcessor;
}
