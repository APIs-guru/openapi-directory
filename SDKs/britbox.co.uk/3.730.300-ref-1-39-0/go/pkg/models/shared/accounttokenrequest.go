package shared

type AccountTokenRequestCookieTypeEnum string

const (
	AccountTokenRequestCookieTypeEnumSession    AccountTokenRequestCookieTypeEnum = "Session"
	AccountTokenRequestCookieTypeEnumPersistent AccountTokenRequestCookieTypeEnum = "Persistent"
)

type AccountTokenRequestScopesEnum string

const (
	AccountTokenRequestScopesEnumCatalog  AccountTokenRequestScopesEnum = "Catalog"
	AccountTokenRequestScopesEnumCommerce AccountTokenRequestScopesEnum = "Commerce"
	AccountTokenRequestScopesEnumSettings AccountTokenRequestScopesEnum = "Settings"
	AccountTokenRequestScopesEnumPlayback AccountTokenRequestScopesEnum = "Playback"
)

type AccountTokenRequest struct {
	CookieType *AccountTokenRequestCookieTypeEnum `json:"cookieType"`
	Email      string                             `json:"email"`
	Password   string                             `json:"password"`
	Scopes     []AccountTokenRequestScopesEnum    `json:"scopes"`
}
