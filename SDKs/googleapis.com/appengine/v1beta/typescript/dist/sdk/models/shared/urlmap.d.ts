import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiEndpointHandler } from "./apiendpointhandler";
import { ScriptHandler } from "./scripthandler";
import { StaticFilesHandler } from "./staticfileshandler";
export declare enum UrlMapAuthFailActionEnum {
    AuthFailActionUnspecified = "AUTH_FAIL_ACTION_UNSPECIFIED",
    AuthFailActionRedirect = "AUTH_FAIL_ACTION_REDIRECT",
    AuthFailActionUnauthorized = "AUTH_FAIL_ACTION_UNAUTHORIZED"
}
export declare enum UrlMapLoginEnum {
    LoginUnspecified = "LOGIN_UNSPECIFIED",
    LoginOptional = "LOGIN_OPTIONAL",
    LoginAdmin = "LOGIN_ADMIN",
    LoginRequired = "LOGIN_REQUIRED"
}
export declare enum UrlMapRedirectHttpResponseCodeEnum {
    RedirectHttpResponseCodeUnspecified = "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED",
    RedirectHttpResponseCode301 = "REDIRECT_HTTP_RESPONSE_CODE_301",
    RedirectHttpResponseCode302 = "REDIRECT_HTTP_RESPONSE_CODE_302",
    RedirectHttpResponseCode303 = "REDIRECT_HTTP_RESPONSE_CODE_303",
    RedirectHttpResponseCode307 = "REDIRECT_HTTP_RESPONSE_CODE_307"
}
export declare enum UrlMapSecurityLevelEnum {
    SecureUnspecified = "SECURE_UNSPECIFIED",
    SecureDefault = "SECURE_DEFAULT",
    SecureNever = "SECURE_NEVER",
    SecureOptional = "SECURE_OPTIONAL",
    SecureAlways = "SECURE_ALWAYS"
}
/**
 * URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript.
**/
export declare class UrlMap extends SpeakeasyBase {
    apiEndpoint?: ApiEndpointHandler;
    authFailAction?: UrlMapAuthFailActionEnum;
    login?: UrlMapLoginEnum;
    redirectHttpResponseCode?: UrlMapRedirectHttpResponseCodeEnum;
    script?: ScriptHandler;
    securityLevel?: UrlMapSecurityLevelEnum;
    staticFiles?: StaticFilesHandler;
    urlRegex?: string;
}
