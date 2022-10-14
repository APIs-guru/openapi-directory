package shared

type AccessTokenGrantTypeEnum string

const (
	AccessTokenGrantTypeEnumAuthorizationCode AccessTokenGrantTypeEnum = "authorization_code"
)

type AccessToken struct {
	ClientID     string                   `json:"client_id"`
	ClientSecret string                   `json:"client_secret"`
	Code         *string                  `json:"code,omitempty"`
	CodeVerifier *string                  `json:"code_verifier,omitempty"`
	GrantType    AccessTokenGrantTypeEnum `json:"grant_type"`
	RedirectURI  *string                  `json:"redirect_uri,omitempty"`
}
