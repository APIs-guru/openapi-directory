import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputLambdaProcessorDescription } from "./inputlambdaprocessordescription";
/**
 * For a SQL-based Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
**/
export declare class InputProcessingConfigurationDescription extends SpeakeasyBase {
    inputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}
