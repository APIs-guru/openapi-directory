import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiEndpointHandler } from "./apiendpointhandler";
import { ScriptHandler } from "./scripthandler";
import { StaticFilesHandler } from "./staticfileshandler";

export enum UrlMapAuthFailActionEnum {
    AuthFailActionUnspecified = "AUTH_FAIL_ACTION_UNSPECIFIED"
,    AuthFailActionRedirect = "AUTH_FAIL_ACTION_REDIRECT"
,    AuthFailActionUnauthorized = "AUTH_FAIL_ACTION_UNAUTHORIZED"
}

export enum UrlMapLoginEnum {
    LoginUnspecified = "LOGIN_UNSPECIFIED"
,    LoginOptional = "LOGIN_OPTIONAL"
,    LoginAdmin = "LOGIN_ADMIN"
,    LoginRequired = "LOGIN_REQUIRED"
}

export enum UrlMapRedirectHttpResponseCodeEnum {
    RedirectHttpResponseCodeUnspecified = "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED"
,    RedirectHttpResponseCode301 = "REDIRECT_HTTP_RESPONSE_CODE_301"
,    RedirectHttpResponseCode302 = "REDIRECT_HTTP_RESPONSE_CODE_302"
,    RedirectHttpResponseCode303 = "REDIRECT_HTTP_RESPONSE_CODE_303"
,    RedirectHttpResponseCode307 = "REDIRECT_HTTP_RESPONSE_CODE_307"
}

export enum UrlMapSecurityLevelEnum {
    SecureUnspecified = "SECURE_UNSPECIFIED"
,    SecureDefault = "SECURE_DEFAULT"
,    SecureNever = "SECURE_NEVER"
,    SecureOptional = "SECURE_OPTIONAL"
,    SecureAlways = "SECURE_ALWAYS"
}


// UrlMap
/** 
 * URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript.
**/
export class UrlMap extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiEndpoint" })
  apiEndpoint?: ApiEndpointHandler;

  @Metadata({ data: "json, name=authFailAction" })
  authFailAction?: UrlMapAuthFailActionEnum;

  @Metadata({ data: "json, name=login" })
  login?: UrlMapLoginEnum;

  @Metadata({ data: "json, name=redirectHttpResponseCode" })
  redirectHttpResponseCode?: UrlMapRedirectHttpResponseCodeEnum;

  @Metadata({ data: "json, name=script" })
  script?: ScriptHandler;

  @Metadata({ data: "json, name=securityLevel" })
  securityLevel?: UrlMapSecurityLevelEnum;

  @Metadata({ data: "json, name=staticFiles" })
  staticFiles?: StaticFilesHandler;

  @Metadata({ data: "json, name=urlRegex" })
  urlRegex?: string;
}
