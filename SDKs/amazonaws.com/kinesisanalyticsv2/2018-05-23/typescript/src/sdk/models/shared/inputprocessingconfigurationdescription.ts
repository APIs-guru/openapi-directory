import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputLambdaProcessorDescription } from "./inputlambdaprocessordescription";


// InputProcessingConfigurationDescription
/** 
 * For a SQL-based Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
**/
export class InputProcessingConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputLambdaProcessorDescription" })
  inputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}
