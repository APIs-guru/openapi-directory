import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Error
/** 
 * All error responses, whether `4xx` or `5xx` will include one of these as the response
 * body.
**/
export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=error_code" })
  errorCode?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
