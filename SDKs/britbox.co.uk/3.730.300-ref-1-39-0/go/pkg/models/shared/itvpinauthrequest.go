package shared

type ItvPinAuthRequestCookieTypeEnum string

const (
	ItvPinAuthRequestCookieTypeEnumSession    ItvPinAuthRequestCookieTypeEnum = "Session"
	ItvPinAuthRequestCookieTypeEnumPersistent ItvPinAuthRequestCookieTypeEnum = "Persistent"
)

type ItvPinAuthRequestScopesEnum string

const (
	ItvPinAuthRequestScopesEnumCatalog  ItvPinAuthRequestScopesEnum = "Catalog"
	ItvPinAuthRequestScopesEnumCommerce ItvPinAuthRequestScopesEnum = "Commerce"
	ItvPinAuthRequestScopesEnumSettings ItvPinAuthRequestScopesEnum = "Settings"
	ItvPinAuthRequestScopesEnumPlayback ItvPinAuthRequestScopesEnum = "Playback"
)

type ItvPinAuthRequest struct {
	CookieType *ItvPinAuthRequestCookieTypeEnum `json:"cookieType,omitempty"`
	Pin        string                           `json:"pin"`
	Scopes     []ItvPinAuthRequestScopesEnum    `json:"scopes,omitempty"`
}
