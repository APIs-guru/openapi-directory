import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorDetail
/** 
 * Contains details about an error.
**/
export class ErrorDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
