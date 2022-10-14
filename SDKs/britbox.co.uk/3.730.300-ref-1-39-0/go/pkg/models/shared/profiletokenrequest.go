package shared

type ProfileTokenRequestCookieTypeEnum string

const (
	ProfileTokenRequestCookieTypeEnumSession    ProfileTokenRequestCookieTypeEnum = "Session"
	ProfileTokenRequestCookieTypeEnumPersistent ProfileTokenRequestCookieTypeEnum = "Persistent"
)

type ProfileTokenRequestScopesEnum string

const (
	ProfileTokenRequestScopesEnumCatalog  ProfileTokenRequestScopesEnum = "Catalog"
	ProfileTokenRequestScopesEnumCommerce ProfileTokenRequestScopesEnum = "Commerce"
	ProfileTokenRequestScopesEnumSettings ProfileTokenRequestScopesEnum = "Settings"
)

type ProfileTokenRequest struct {
	CookieType *ProfileTokenRequestCookieTypeEnum `json:"cookieType,omitempty"`
	Pin        *string                            `json:"pin,omitempty"`
	ProfileID  string                             `json:"profileId"`
	Scopes     []ProfileTokenRequestScopesEnum    `json:"scopes"`
}
