import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsLambdaFunctionEnvironmentError
/** 
 * Error messages for environment variables that could not be applied.
**/
export class AwsLambdaFunctionEnvironmentError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
