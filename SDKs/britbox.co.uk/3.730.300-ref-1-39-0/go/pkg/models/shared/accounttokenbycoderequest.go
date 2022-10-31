package shared

type AccountTokenByCodeRequestScopesEnum string

const (
	AccountTokenByCodeRequestScopesEnumCatalog  AccountTokenByCodeRequestScopesEnum = "Catalog"
	AccountTokenByCodeRequestScopesEnumCommerce AccountTokenByCodeRequestScopesEnum = "Commerce"
	AccountTokenByCodeRequestScopesEnumSettings AccountTokenByCodeRequestScopesEnum = "Settings"
	AccountTokenByCodeRequestScopesEnumPlayback AccountTokenByCodeRequestScopesEnum = "Playback"
)

type AccountTokenByCodeRequest struct {
	Code   string                                `json:"code"`
	ID     string                                `json:"id"`
	Scopes []AccountTokenByCodeRequestScopesEnum `json:"scopes"`
}
