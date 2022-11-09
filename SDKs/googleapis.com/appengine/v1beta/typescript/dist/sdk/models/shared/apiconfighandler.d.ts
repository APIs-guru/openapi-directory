import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ApiConfigHandlerAuthFailActionEnum {
    AuthFailActionUnspecified = "AUTH_FAIL_ACTION_UNSPECIFIED",
    AuthFailActionRedirect = "AUTH_FAIL_ACTION_REDIRECT",
    AuthFailActionUnauthorized = "AUTH_FAIL_ACTION_UNAUTHORIZED"
}
export declare enum ApiConfigHandlerLoginEnum {
    LoginUnspecified = "LOGIN_UNSPECIFIED",
    LoginOptional = "LOGIN_OPTIONAL",
    LoginAdmin = "LOGIN_ADMIN",
    LoginRequired = "LOGIN_REQUIRED"
}
export declare enum ApiConfigHandlerSecurityLevelEnum {
    SecureUnspecified = "SECURE_UNSPECIFIED",
    SecureDefault = "SECURE_DEFAULT",
    SecureNever = "SECURE_NEVER",
    SecureOptional = "SECURE_OPTIONAL",
    SecureAlways = "SECURE_ALWAYS"
}
/**
 * Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration for API handlers.
**/
export declare class ApiConfigHandler extends SpeakeasyBase {
    authFailAction?: ApiConfigHandlerAuthFailActionEnum;
    login?: ApiConfigHandlerLoginEnum;
    script?: string;
    securityLevel?: ApiConfigHandlerSecurityLevelEnum;
    url?: string;
}
