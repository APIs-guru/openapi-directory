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

type OAuthClient struct {
	AccessTokenValidity  *int32                      `json:"accessTokenValidity"`
	ApprovalValidity     *int32                      `json:"approvalValidity"`
	ClientID             string                      `json:"clientId"`
	ClientName           *string                     `json:"clientName"`
	ClientSecret         *string                     `json:"clientSecret"`
	ClientType           *OAuthClientClientTypeEnum  `json:"clientType"`
	GrantTypes           []OAuthClientGrantTypesEnum `json:"grantTypes"`
	IsEnabled            *bool                       `json:"isEnabled"`
	IsExternal           *bool                       `json:"isExternal"`
	IsStandard           *bool                       `json:"isStandard"`
	RedirectUris         []string                    `json:"redirectUris"`
	RefreshTokenValidity *int32                      `json:"refreshTokenValidity"`
}
