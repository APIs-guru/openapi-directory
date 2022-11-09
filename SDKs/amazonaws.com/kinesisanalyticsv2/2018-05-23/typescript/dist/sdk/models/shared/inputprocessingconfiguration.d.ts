import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputLambdaProcessor } from "./inputlambdaprocessor";
/**
 * For a SQL-based Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
**/
export declare class InputProcessingConfiguration extends SpeakeasyBase {
    inputLambdaProcessor: InputLambdaProcessor;
}
