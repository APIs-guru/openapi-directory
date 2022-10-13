package shared

type APIConfigHandlerAuthFailActionEnum string

const (
	APIConfigHandlerAuthFailActionEnumAuthFailActionUnspecified  APIConfigHandlerAuthFailActionEnum = "AUTH_FAIL_ACTION_UNSPECIFIED"
	APIConfigHandlerAuthFailActionEnumAuthFailActionRedirect     APIConfigHandlerAuthFailActionEnum = "AUTH_FAIL_ACTION_REDIRECT"
	APIConfigHandlerAuthFailActionEnumAuthFailActionUnauthorized APIConfigHandlerAuthFailActionEnum = "AUTH_FAIL_ACTION_UNAUTHORIZED"
)

type APIConfigHandlerLoginEnum string

const (
	APIConfigHandlerLoginEnumLoginUnspecified APIConfigHandlerLoginEnum = "LOGIN_UNSPECIFIED"
	APIConfigHandlerLoginEnumLoginOptional    APIConfigHandlerLoginEnum = "LOGIN_OPTIONAL"
	APIConfigHandlerLoginEnumLoginAdmin       APIConfigHandlerLoginEnum = "LOGIN_ADMIN"
	APIConfigHandlerLoginEnumLoginRequired    APIConfigHandlerLoginEnum = "LOGIN_REQUIRED"
)

type APIConfigHandlerSecurityLevelEnum string

const (
	APIConfigHandlerSecurityLevelEnumSecureUnspecified APIConfigHandlerSecurityLevelEnum = "SECURE_UNSPECIFIED"
	APIConfigHandlerSecurityLevelEnumSecureDefault     APIConfigHandlerSecurityLevelEnum = "SECURE_DEFAULT"
	APIConfigHandlerSecurityLevelEnumSecureNever       APIConfigHandlerSecurityLevelEnum = "SECURE_NEVER"
	APIConfigHandlerSecurityLevelEnumSecureOptional    APIConfigHandlerSecurityLevelEnum = "SECURE_OPTIONAL"
	APIConfigHandlerSecurityLevelEnumSecureAlways      APIConfigHandlerSecurityLevelEnum = "SECURE_ALWAYS"
)

type APIConfigHandler struct {
	AuthFailAction *APIConfigHandlerAuthFailActionEnum `json:"authFailAction"`
	Login          *APIConfigHandlerLoginEnum          `json:"login"`
	Script         *string                             `json:"script"`
	SecurityLevel  *APIConfigHandlerSecurityLevelEnum  `json:"securityLevel"`
	URL            *string                             `json:"url"`
}
