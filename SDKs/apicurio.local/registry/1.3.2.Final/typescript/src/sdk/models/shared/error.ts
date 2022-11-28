import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Error
/** 
 * All error responses, whether `4xx` or `5xx` will include one of these as the response
 * body.
**/
export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
