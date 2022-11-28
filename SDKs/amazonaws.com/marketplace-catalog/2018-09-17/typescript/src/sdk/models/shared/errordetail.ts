import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorDetail
/** 
 * Details about the error.
**/
export class ErrorDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
