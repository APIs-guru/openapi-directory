import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AmpUrlErrorErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED"
,    InputUrlNotFound = "INPUT_URL_NOT_FOUND"
,    NoAmpUrl = "NO_AMP_URL"
,    ApplicationError = "APPLICATION_ERROR"
,    UrlIsValidAmp = "URL_IS_VALID_AMP"
,    UrlIsInvalidAmp = "URL_IS_INVALID_AMP"
}


// AmpUrlError
/** 
 * AMP URL Error resource for a requested URL that couldn't be found.
**/
export class AmpUrlError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: AmpUrlErrorErrorCodeEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=originalUrl" })
  originalUrl?: string;
}
