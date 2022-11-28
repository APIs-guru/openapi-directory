import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorResponse
/** 
 * Error information
**/
export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: number;

  @SpeakeasyMetadata({ data: "json, name=debugInfo" })
  debugInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
