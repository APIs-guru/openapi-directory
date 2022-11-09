import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnvironmentError
/** 
 * Error messages for environment variables that couldn't be applied.
**/
export class EnvironmentError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
