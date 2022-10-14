package shared

type TokenRefreshRequestCookieTypeEnum string

const (
	TokenRefreshRequestCookieTypeEnumSession    TokenRefreshRequestCookieTypeEnum = "Session"
	TokenRefreshRequestCookieTypeEnumPersistent TokenRefreshRequestCookieTypeEnum = "Persistent"
)

type TokenRefreshRequest struct {
	CookieType *TokenRefreshRequestCookieTypeEnum `json:"cookieType,omitempty"`
	Token      string                             `json:"token"`
}
