import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsLambdaFunctionEnvironmentError
/** 
 * Error messages for environment variables that could not be applied.
**/
export class AwsLambdaFunctionEnvironmentError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
