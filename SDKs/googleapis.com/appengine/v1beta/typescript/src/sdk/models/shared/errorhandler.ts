import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ErrorHandlerErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED"
,    ErrorCodeDefault = "ERROR_CODE_DEFAULT"
,    ErrorCodeOverQuota = "ERROR_CODE_OVER_QUOTA"
,    ErrorCodeDosApiDenial = "ERROR_CODE_DOS_API_DENIAL"
,    ErrorCodeTimeout = "ERROR_CODE_TIMEOUT"
}


// ErrorHandler
/** 
 * Custom static error page to be served when an error occurs.
**/
export class ErrorHandler extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: ErrorHandlerErrorCodeEnum;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=staticFile" })
  staticFile?: string;
}
