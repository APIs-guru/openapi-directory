import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateError
/** 
 * An object containing the error encountered with the last update: <code>ErrorCode</code>, <code>ErrorMessage</code>.
**/
export class UpdateError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
