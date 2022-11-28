import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputLambdaProcessorDescription } from "./inputlambdaprocessordescription";



// InputProcessingConfigurationDescription
/** 
 * Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
**/
export class InputProcessingConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputLambdaProcessorDescription" })
  inputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}
