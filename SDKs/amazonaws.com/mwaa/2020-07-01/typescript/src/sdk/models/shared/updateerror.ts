import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateError
/** 
 * An object containing the error encountered with the last update: <code>ErrorCode</code>, <code>ErrorMessage</code>.
**/
export class UpdateError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
