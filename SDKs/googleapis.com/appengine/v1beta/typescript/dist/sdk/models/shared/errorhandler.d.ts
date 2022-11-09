import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ErrorHandlerErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED",
    ErrorCodeDefault = "ERROR_CODE_DEFAULT",
    ErrorCodeOverQuota = "ERROR_CODE_OVER_QUOTA",
    ErrorCodeDosApiDenial = "ERROR_CODE_DOS_API_DENIAL",
    ErrorCodeTimeout = "ERROR_CODE_TIMEOUT"
}
/**
 * Custom static error page to be served when an error occurs.
**/
export declare class ErrorHandler extends SpeakeasyBase {
    errorCode?: ErrorHandlerErrorCodeEnum;
    mimeType?: string;
    staticFile?: string;
}
