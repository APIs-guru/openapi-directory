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
	AccessTokenValidity  *int32                                   `json:"accessTokenValidity,omitempty"`
	ApprovalValidity     *int32                                   `json:"approvalValidity,omitempty"`
	ClientID             *string                                  `json:"clientId,omitempty"`
	ClientName           string                                   `json:"clientName"`
	ClientSecret         *string                                  `json:"clientSecret,omitempty"`
	ClientType           *CreateOAuthClientRequestClientTypeEnum  `json:"clientType,omitempty"`
	GrantTypes           []CreateOAuthClientRequestGrantTypesEnum `json:"grantTypes"`
	RedirectUris         []string                                 `json:"redirectUris,omitempty"`
	RefreshTokenValidity *int32                                   `json:"refreshTokenValidity,omitempty"`
}
