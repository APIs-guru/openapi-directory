package shared

type OAuthGrantTypeEnum string

const (
	OAuthGrantTypeEnumAuthorizationCode OAuthGrantTypeEnum = "authorization_code"
	OAuthGrantTypeEnumClientCredentials OAuthGrantTypeEnum = "client_credentials"
)
