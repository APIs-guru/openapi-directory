import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorDetail
/** 
 * Details about the error.
**/
export class ErrorDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
