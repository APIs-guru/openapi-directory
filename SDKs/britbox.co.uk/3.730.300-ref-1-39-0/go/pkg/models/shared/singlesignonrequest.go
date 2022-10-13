package shared

type SingleSignOnRequestCookieTypeEnum string

const (
	SingleSignOnRequestCookieTypeEnumSession    SingleSignOnRequestCookieTypeEnum = "Session"
	SingleSignOnRequestCookieTypeEnumPersistent SingleSignOnRequestCookieTypeEnum = "Persistent"
)

type SingleSignOnRequestProviderEnum string

const (
	SingleSignOnRequestProviderEnumFacebook SingleSignOnRequestProviderEnum = "Facebook"
)

type SingleSignOnRequestScopesEnum string

const (
	SingleSignOnRequestScopesEnumCatalog  SingleSignOnRequestScopesEnum = "Catalog"
	SingleSignOnRequestScopesEnumCommerce SingleSignOnRequestScopesEnum = "Commerce"
	SingleSignOnRequestScopesEnumSettings SingleSignOnRequestScopesEnum = "Settings"
	SingleSignOnRequestScopesEnumPlayback SingleSignOnRequestScopesEnum = "Playback"
)

type SingleSignOnRequest struct {
	CookieType   *SingleSignOnRequestCookieTypeEnum `json:"cookieType"`
	LinkAccounts *bool                              `json:"linkAccounts"`
	Provider     SingleSignOnRequestProviderEnum    `json:"provider"`
	Scopes       []SingleSignOnRequestScopesEnum    `json:"scopes"`
	Token        string                             `json:"token"`
}
