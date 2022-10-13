package shared

type CreateOAuthClientRequestClientTypeEnum string

const (
	CreateOAuthClientRequestClientTypeEnumConfidential CreateOAuthClientRequestClientTypeEnum = "confidential"
	CreateOAuthClientRequestClientTypeEnumPublic       CreateOAuthClientRequestClientTypeEnum = "public"
)

type CreateOAuthClientRequestGrantTypesEnum string

const (
	CreateOAuthClientRequestGrantTypesEnumAuthorizationCode CreateOAuthClientRequestGrantTypesEnum = "authorization_code"
	CreateOAuthClientRequestGrantTypesEnumClientCredentials CreateOAuthClientRequestGrantTypesEnum = "client_credentials"
	CreateOAuthClientRequestGrantTypesEnumImplicit          CreateOAuthClientRequestGrantTypesEnum = "implicit"
	CreateOAuthClientRequestGrantTypesEnumPassword          CreateOAuthClientRequestGrantTypesEnum = "password"
	CreateOAuthClientRequestGrantTypesEnumRefreshToken      CreateOAuthClientRequestGrantTypesEnum = "refresh_token"
)

type CreateOAuthClientRequest struct {
	AccessTokenValidity  *int32                                   `json:"accessTokenValidity"`
	ApprovalValidity     *int32                                   `json:"approvalValidity"`
	ClientID             *string                                  `json:"clientId"`
	ClientName           string                                   `json:"clientName"`
	ClientSecret         *string                                  `json:"clientSecret"`
	ClientType           *CreateOAuthClientRequestClientTypeEnum  `json:"clientType"`
	GrantTypes           []CreateOAuthClientRequestGrantTypesEnum `json:"grantTypes"`
	RedirectUris         []string                                 `json:"redirectUris"`
	RefreshTokenValidity *int32                                   `json:"refreshTokenValidity"`
}
