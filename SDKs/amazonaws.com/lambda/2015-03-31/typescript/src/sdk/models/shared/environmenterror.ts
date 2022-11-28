import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnvironmentError
/** 
 * Error messages for environment variables that couldn't be applied.
**/
export class EnvironmentError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
