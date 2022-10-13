package shared

type URLMapAuthFailActionEnum string

const (
	URLMapAuthFailActionEnumAuthFailActionUnspecified  URLMapAuthFailActionEnum = "AUTH_FAIL_ACTION_UNSPECIFIED"
	URLMapAuthFailActionEnumAuthFailActionRedirect     URLMapAuthFailActionEnum = "AUTH_FAIL_ACTION_REDIRECT"
	URLMapAuthFailActionEnumAuthFailActionUnauthorized URLMapAuthFailActionEnum = "AUTH_FAIL_ACTION_UNAUTHORIZED"
)

type URLMapLoginEnum string

const (
	URLMapLoginEnumLoginUnspecified URLMapLoginEnum = "LOGIN_UNSPECIFIED"
	URLMapLoginEnumLoginOptional    URLMapLoginEnum = "LOGIN_OPTIONAL"
	URLMapLoginEnumLoginAdmin       URLMapLoginEnum = "LOGIN_ADMIN"
	URLMapLoginEnumLoginRequired    URLMapLoginEnum = "LOGIN_REQUIRED"
)

type URLMapRedirectHTTPResponseCodeEnum string

const (
	URLMapRedirectHTTPResponseCodeEnumRedirectHTTPResponseCodeUnspecified URLMapRedirectHTTPResponseCodeEnum = "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED"
	URLMapRedirectHTTPResponseCodeEnumRedirectHTTPResponseCode301         URLMapRedirectHTTPResponseCodeEnum = "REDIRECT_HTTP_RESPONSE_CODE_301"
	URLMapRedirectHTTPResponseCodeEnumRedirectHTTPResponseCode302         URLMapRedirectHTTPResponseCodeEnum = "REDIRECT_HTTP_RESPONSE_CODE_302"
	URLMapRedirectHTTPResponseCodeEnumRedirectHTTPResponseCode303         URLMapRedirectHTTPResponseCodeEnum = "REDIRECT_HTTP_RESPONSE_CODE_303"
	URLMapRedirectHTTPResponseCodeEnumRedirectHTTPResponseCode307         URLMapRedirectHTTPResponseCodeEnum = "REDIRECT_HTTP_RESPONSE_CODE_307"
)

type URLMapSecurityLevelEnum string

const (
	URLMapSecurityLevelEnumSecureUnspecified URLMapSecurityLevelEnum = "SECURE_UNSPECIFIED"
	URLMapSecurityLevelEnumSecureDefault     URLMapSecurityLevelEnum = "SECURE_DEFAULT"
	URLMapSecurityLevelEnumSecureNever       URLMapSecurityLevelEnum = "SECURE_NEVER"
	URLMapSecurityLevelEnumSecureOptional    URLMapSecurityLevelEnum = "SECURE_OPTIONAL"
	URLMapSecurityLevelEnumSecureAlways      URLMapSecurityLevelEnum = "SECURE_ALWAYS"
)

type URLMap struct {
	APIEndpoint              *APIEndpointHandler                 `json:"apiEndpoint"`
	AuthFailAction           *URLMapAuthFailActionEnum           `json:"authFailAction"`
	Login                    *URLMapLoginEnum                    `json:"login"`
	RedirectHTTPResponseCode *URLMapRedirectHTTPResponseCodeEnum `json:"redirectHttpResponseCode"`
	Script                   *ScriptHandler                      `json:"script"`
	SecurityLevel            *URLMapSecurityLevelEnum            `json:"securityLevel"`
	StaticFiles              *StaticFilesHandler                 `json:"staticFiles"`
	URLRegex                 *string                             `json:"urlRegex"`
}
