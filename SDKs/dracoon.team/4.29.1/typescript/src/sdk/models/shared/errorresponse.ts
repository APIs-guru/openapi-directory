import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorResponse
/** 
 * Error information
**/
export class ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: number;

  @Metadata({ data: "json, name=debugInfo" })
  debugInfo?: string;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: number;

  @Metadata({ data: "json, name=message" })
  message: string;
}
