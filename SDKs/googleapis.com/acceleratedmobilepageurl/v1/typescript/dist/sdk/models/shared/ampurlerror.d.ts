import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AmpUrlErrorErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED",
    InputUrlNotFound = "INPUT_URL_NOT_FOUND",
    NoAmpUrl = "NO_AMP_URL",
    ApplicationError = "APPLICATION_ERROR",
    UrlIsValidAmp = "URL_IS_VALID_AMP",
    UrlIsInvalidAmp = "URL_IS_INVALID_AMP"
}
/**
 * AMP URL Error resource for a requested URL that couldn't be found.
**/
export declare class AmpUrlError extends SpeakeasyBase {
    errorCode?: AmpUrlErrorErrorCodeEnum;
    errorMessage?: string;
    originalUrl?: string;
}
