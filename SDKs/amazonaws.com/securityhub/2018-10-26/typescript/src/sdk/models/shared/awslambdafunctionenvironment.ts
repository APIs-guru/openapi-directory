import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsLambdaFunctionEnvironmentError } from "./awslambdafunctionenvironmenterror";


// AwsLambdaFunctionEnvironment
/** 
 * A function's environment variable settings.
**/
export class AwsLambdaFunctionEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: AwsLambdaFunctionEnvironmentError;

  @Metadata({ data: "json, name=Variables" })
  variables?: Map<string, string>;
}
