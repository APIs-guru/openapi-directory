package shared




type UpdateOAuthClientRequestClientTypeEnum string

const (
    UpdateOAuthClientRequestClientTypeEnumConfidential UpdateOAuthClientRequestClientTypeEnum = "confidential"
UpdateOAuthClientRequestClientTypeEnumPublic UpdateOAuthClientRequestClientTypeEnum = "public"
)



type UpdateOAuthClientRequestGrantTypesEnum string

const (
    UpdateOAuthClientRequestGrantTypesEnumAuthorizationCode UpdateOAuthClientRequestGrantTypesEnum = "authorization_code"
UpdateOAuthClientRequestGrantTypesEnumClientCredentials UpdateOAuthClientRequestGrantTypesEnum = "client_credentials"
UpdateOAuthClientRequestGrantTypesEnumImplicit UpdateOAuthClientRequestGrantTypesEnum = "implicit"
UpdateOAuthClientRequestGrantTypesEnumPassword UpdateOAuthClientRequestGrantTypesEnum = "password"
UpdateOAuthClientRequestGrantTypesEnumRefreshToken UpdateOAuthClientRequestGrantTypesEnum = "refresh_token"
)


type UpdateOAuthClientRequest struct {
    AccessTokenValidity *int32 `json:"accessTokenValidity,omitempty"`
    ApprovalValidity *int32 `json:"approvalValidity,omitempty"`
    ClientName *string `json:"clientName,omitempty"`
    ClientSecret *string `json:"clientSecret,omitempty"`
    ClientType *UpdateOAuthClientRequestClientTypeEnum `json:"clientType,omitempty"`
    GrantTypes []UpdateOAuthClientRequestGrantTypesEnum `json:"grantTypes"`
    IsEnabled *bool `json:"isEnabled,omitempty"`
    RedirectUris []string `json:"redirectUris,omitempty"`
    RefreshTokenValidity *int32 `json:"refreshTokenValidity,omitempty"`
    
}

