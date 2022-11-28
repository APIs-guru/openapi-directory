import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputLambdaProcessorUpdate } from "./inputlambdaprocessorupdate";



// InputProcessingConfigurationUpdate
/** 
 * Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. 
**/
export class InputProcessingConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputLambdaProcessorUpdate" })
  inputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
}
