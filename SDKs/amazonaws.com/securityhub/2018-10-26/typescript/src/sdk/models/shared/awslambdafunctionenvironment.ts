import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsLambdaFunctionEnvironmentError } from "./awslambdafunctionenvironmenterror";



// AwsLambdaFunctionEnvironment
/** 
 * A function's environment variable settings.
**/
export class AwsLambdaFunctionEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: AwsLambdaFunctionEnvironmentError;

  @SpeakeasyMetadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;
}
