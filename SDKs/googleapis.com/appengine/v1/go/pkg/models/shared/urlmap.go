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
	APIEndpoint              *APIEndpointHandler                 `json:"apiEndpoint,omitempty"`
	AuthFailAction           *URLMapAuthFailActionEnum           `json:"authFailAction,omitempty"`
	Login                    *URLMapLoginEnum                    `json:"login,omitempty"`
	RedirectHTTPResponseCode *URLMapRedirectHTTPResponseCodeEnum `json:"redirectHttpResponseCode,omitempty"`
	Script                   *ScriptHandler                      `json:"script,omitempty"`
	SecurityLevel            *URLMapSecurityLevelEnum            `json:"securityLevel,omitempty"`
	StaticFiles              *StaticFilesHandler                 `json:"staticFiles,omitempty"`
	URLRegex                 *string                             `json:"urlRegex,omitempty"`
}
