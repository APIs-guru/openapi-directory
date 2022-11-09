import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorDetail
/** 
 * Contains details about an error.
**/
export class ErrorDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;
}
