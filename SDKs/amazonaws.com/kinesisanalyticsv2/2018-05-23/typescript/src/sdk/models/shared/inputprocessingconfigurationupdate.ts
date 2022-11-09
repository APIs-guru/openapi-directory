import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputLambdaProcessorUpdate } from "./inputlambdaprocessorupdate";


// InputProcessingConfigurationUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.
**/
export class InputProcessingConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputLambdaProcessorUpdate" })
  inputLambdaProcessorUpdate: InputLambdaProcessorUpdate;
}
