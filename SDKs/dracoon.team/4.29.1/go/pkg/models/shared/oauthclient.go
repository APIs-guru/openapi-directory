package shared

type OAuthClientClientTypeEnum string

const (
	OAuthClientClientTypeEnumConfidential OAuthClientClientTypeEnum = "confidential"
	OAuthClientClientTypeEnumPublic       OAuthClientClientTypeEnum = "public"
)

type OAuthClientGrantTypesEnum string

const (
	OAuthClientGrantTypesEnumAuthorizationCode OAuthClientGrantTypesEnum = "authorization_code"
	OAuthClientGrantTypesEnumClientCredentials OAuthClientGrantTypesEnum = "client_credentials"
	OAuthClientGrantTypesEnumImplicit          OAuthClientGrantTypesEnum = "implicit"
	OAuthClientGrantTypesEnumPassword          OAuthClientGrantTypesEnum = "password"
	OAuthClientGrantTypesEnumRefreshToken      OAuthClientGrantTypesEnum = "refresh_token"
)

// OAuthClient
// OAuth client information
type OAuthClient struct {
	AccessTokenValidity  *int32                      `json:"accessTokenValidity,omitempty"`
	ApprovalValidity     *int32                      `json:"approvalValidity,omitempty"`
	ClientID             string                      `json:"clientId"`
	ClientName           *string                     `json:"clientName,omitempty"`
	ClientSecret         *string                     `json:"clientSecret,omitempty"`
	ClientType           *OAuthClientClientTypeEnum  `json:"clientType,omitempty"`
	GrantTypes           []OAuthClientGrantTypesEnum `json:"grantTypes"`
	IsEnabled            *bool                       `json:"isEnabled,omitempty"`
	IsExternal           *bool                       `json:"isExternal,omitempty"`
	IsStandard           *bool                       `json:"isStandard,omitempty"`
	RedirectUris         []string                    `json:"redirectUris,omitempty"`
	RefreshTokenValidity *int32                      `json:"refreshTokenValidity,omitempty"`
}
