package shared

type OAuthTokenPasswordGrantTypeEnum string

const (
	OAuthTokenPasswordGrantTypeEnumPassword     OAuthTokenPasswordGrantTypeEnum = "password"
	OAuthTokenPasswordGrantTypeEnumRefreshToken OAuthTokenPasswordGrantTypeEnum = "refresh_token"
)

type OAuthTokenPassword struct {
	ClientID     string                          `form:"name=client_id"`
	ClientSecret string                          `form:"name=client_secret"`
	GrantType    OAuthTokenPasswordGrantTypeEnum `form:"name=grant_type"`
	Password     string                          `form:"name=password"`
	Username     string                          `form:"name=username"`
}
