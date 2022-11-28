package shared

type UpdateOpenIDIdpConfigRequestFlowEnum string

const (
	UpdateOpenIDIdpConfigRequestFlowEnumAuthorizationCode UpdateOpenIDIdpConfigRequestFlowEnum = "authorization_code"
	UpdateOpenIDIdpConfigRequestFlowEnumHybrid            UpdateOpenIDIdpConfigRequestFlowEnum = "hybrid"
)

type UpdateOpenIDIdpConfigRequestUserInfoSourceEnum string

const (
	UpdateOpenIDIdpConfigRequestUserInfoSourceEnumUserInfoEndpoint UpdateOpenIDIdpConfigRequestUserInfoSourceEnum = "user_info_endpoint"
	UpdateOpenIDIdpConfigRequestUserInfoSourceEnumIDToken          UpdateOpenIDIdpConfigRequestUserInfoSourceEnum = "id_token"
)

// UpdateOpenIDIdpConfigRequest
// Request model for updating an OpenID Connect IDP configuration
type UpdateOpenIDIdpConfigRequest struct {
	AuthorizationEndPointURL  *string                                         `json:"authorizationEndPointUrl,omitempty"`
	ClientID                  *string                                         `json:"clientId,omitempty"`
	ClientSecret              *string                                         `json:"clientSecret,omitempty"`
	FallbackMappingClaim      *string                                         `json:"fallbackMappingClaim,omitempty"`
	Flow                      *UpdateOpenIDIdpConfigRequestFlowEnum           `json:"flow,omitempty"`
	Issuer                    *string                                         `json:"issuer,omitempty"`
	JwksEndPointURL           *string                                         `json:"jwksEndPointUrl,omitempty"`
	MappingClaim              *string                                         `json:"mappingClaim,omitempty"`
	Name                      *string                                         `json:"name,omitempty"`
	PkceChallengeMethod       *string                                         `json:"pkceChallengeMethod,omitempty"`
	PkceEnabled               *bool                                           `json:"pkceEnabled,omitempty"`
	RedirectUris              []string                                        `json:"redirectUris,omitempty"`
	ResetFallbackMappingClaim *bool                                           `json:"resetFallbackMappingClaim,omitempty"`
	Scopes                    []string                                        `json:"scopes,omitempty"`
	TokenEndPointURL          *string                                         `json:"tokenEndPointUrl,omitempty"`
	UserImportEnabled         *bool                                           `json:"userImportEnabled,omitempty"`
	UserImportGroup           *int64                                          `json:"userImportGroup,omitempty"`
	UserInfoEndPointURL       *string                                         `json:"userInfoEndPointUrl,omitempty"`
	UserInfoSource            *UpdateOpenIDIdpConfigRequestUserInfoSourceEnum `json:"userInfoSource,omitempty"`
	UserManagementURL         *string                                         `json:"userManagementUrl,omitempty"`
	UserUpdateEnabled         *bool                                           `json:"userUpdateEnabled,omitempty"`
}
