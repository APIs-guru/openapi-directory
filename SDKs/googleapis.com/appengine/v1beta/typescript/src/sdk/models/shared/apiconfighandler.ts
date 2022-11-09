import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiConfigHandlerAuthFailActionEnum {
    AuthFailActionUnspecified = "AUTH_FAIL_ACTION_UNSPECIFIED"
,    AuthFailActionRedirect = "AUTH_FAIL_ACTION_REDIRECT"
,    AuthFailActionUnauthorized = "AUTH_FAIL_ACTION_UNAUTHORIZED"
}

export enum ApiConfigHandlerLoginEnum {
    LoginUnspecified = "LOGIN_UNSPECIFIED"
,    LoginOptional = "LOGIN_OPTIONAL"
,    LoginAdmin = "LOGIN_ADMIN"
,    LoginRequired = "LOGIN_REQUIRED"
}

export enum ApiConfigHandlerSecurityLevelEnum {
    SecureUnspecified = "SECURE_UNSPECIFIED"
,    SecureDefault = "SECURE_DEFAULT"
,    SecureNever = "SECURE_NEVER"
,    SecureOptional = "SECURE_OPTIONAL"
,    SecureAlways = "SECURE_ALWAYS"
}


// ApiConfigHandler
/** 
 * Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration for API handlers.
**/
export class ApiConfigHandler extends SpeakeasyBase {
  @Metadata({ data: "json, name=authFailAction" })
  authFailAction?: ApiConfigHandlerAuthFailActionEnum;

  @Metadata({ data: "json, name=login" })
  login?: ApiConfigHandlerLoginEnum;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=securityLevel" })
  securityLevel?: ApiConfigHandlerSecurityLevelEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
