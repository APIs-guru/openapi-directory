package shared

type UpdateOAuthClientRequestClientTypeEnum string

const (
	UpdateOAuthClientRequestClientTypeEnumConfidential UpdateOAuthClientRequestClientTypeEnum = "confidential"
	UpdateOAuthClientRequestClientTypeEnumPublic       UpdateOAuthClientRequestClientTypeEnum = "public"
)

type UpdateOAuthClientRequestGrantTypesEnum string

const (
	UpdateOAuthClientRequestGrantTypesEnumAuthorizationCode UpdateOAuthClientRequestGrantTypesEnum = "authorization_code"
	UpdateOAuthClientRequestGrantTypesEnumClientCredentials UpdateOAuthClientRequestGrantTypesEnum = "client_credentials"
	UpdateOAuthClientRequestGrantTypesEnumImplicit          UpdateOAuthClientRequestGrantTypesEnum = "implicit"
	UpdateOAuthClientRequestGrantTypesEnumPassword          UpdateOAuthClientRequestGrantTypesEnum = "password"
	UpdateOAuthClientRequestGrantTypesEnumRefreshToken      UpdateOAuthClientRequestGrantTypesEnum = "refresh_token"
)

type UpdateOAuthClientRequest struct {
	AccessTokenValidity  *int32                                   `json:"accessTokenValidity"`
	ApprovalValidity     *int32                                   `json:"approvalValidity"`
	ClientName           *string                                  `json:"clientName"`
	ClientSecret         *string                                  `json:"clientSecret"`
	ClientType           *UpdateOAuthClientRequestClientTypeEnum  `json:"clientType"`
	GrantTypes           []UpdateOAuthClientRequestGrantTypesEnum `json:"grantTypes"`
	IsEnabled            *bool                                    `json:"isEnabled"`
	RedirectUris         []string                                 `json:"redirectUris"`
	RefreshTokenValidity *int32                                   `json:"refreshTokenValidity"`
}
