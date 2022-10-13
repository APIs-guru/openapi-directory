package shared

type TokenRefreshRequestCookieTypeEnum string

const (
	TokenRefreshRequestCookieTypeEnumSession    TokenRefreshRequestCookieTypeEnum = "Session"
	TokenRefreshRequestCookieTypeEnumPersistent TokenRefreshRequestCookieTypeEnum = "Persistent"
)

type TokenRefreshRequest struct {
	CookieType *TokenRefreshRequestCookieTypeEnum `json:"cookieType"`
	Token      string                             `json:"token"`
}
