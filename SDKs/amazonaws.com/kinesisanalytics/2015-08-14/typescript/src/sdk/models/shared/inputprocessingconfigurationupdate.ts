import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputLambdaProcessorUpdate } from "./inputlambdaprocessorupdate";


// InputProcessingConfigurationUpdate
/** 
 * Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. 
**/
export class InputProcessingConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputLambdaProcessorUpdate" })
  inputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
}
