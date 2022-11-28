import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputLambdaProcessorUpdate } from "./inputlambdaprocessorupdate";



// InputProcessingConfigurationUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.
**/
export class InputProcessingConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InputLambdaProcessorUpdate" })
  inputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
}
