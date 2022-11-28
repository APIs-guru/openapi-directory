package shared

type CreateOpenIDIdpConfigRequestFlowEnum string

const (
	CreateOpenIDIdpConfigRequestFlowEnumAuthorizationCode CreateOpenIDIdpConfigRequestFlowEnum = "authorization_code"
	CreateOpenIDIdpConfigRequestFlowEnumHybrid            CreateOpenIDIdpConfigRequestFlowEnum = "hybrid"
)

type CreateOpenIDIdpConfigRequestUserInfoSourceEnum string

const (
	CreateOpenIDIdpConfigRequestUserInfoSourceEnumUserInfoEndpoint CreateOpenIDIdpConfigRequestUserInfoSourceEnum = "user_info_endpoint"
	CreateOpenIDIdpConfigRequestUserInfoSourceEnumIDToken          CreateOpenIDIdpConfigRequestUserInfoSourceEnum = "id_token"
)

// CreateOpenIDIdpConfigRequest
// Request model for creating an OpenID Connect IDP configuration
type CreateOpenIDIdpConfigRequest struct {
	AuthorizationEndPointURL string                                          `json:"authorizationEndPointUrl"`
	ClientID                 string                                          `json:"clientId"`
	ClientSecret             string                                          `json:"clientSecret"`
	FallbackMappingClaim     *string                                         `json:"fallbackMappingClaim,omitempty"`
	Flow                     *CreateOpenIDIdpConfigRequestFlowEnum           `json:"flow,omitempty"`
	Issuer                   string                                          `json:"issuer"`
	JwksEndPointURL          string                                          `json:"jwksEndPointUrl"`
	MappingClaim             string                                          `json:"mappingClaim"`
	Name                     string                                          `json:"name"`
	PkceChallengeMethod      *string                                         `json:"pkceChallengeMethod,omitempty"`
	PkceEnabled              *bool                                           `json:"pkceEnabled,omitempty"`
	RedirectUris             []string                                        `json:"redirectUris"`
	Scopes                   []string                                        `json:"scopes"`
	TokenEndPointURL         string                                          `json:"tokenEndPointUrl"`
	UserImportEnabled        *bool                                           `json:"userImportEnabled,omitempty"`
	UserImportGroup          *int64                                          `json:"userImportGroup,omitempty"`
	UserInfoEndPointURL      string                                          `json:"userInfoEndPointUrl"`
	UserInfoSource           *CreateOpenIDIdpConfigRequestUserInfoSourceEnum `json:"userInfoSource,omitempty"`
	UserManagementURL        *string                                         `json:"userManagementUrl,omitempty"`
	UserUpdateEnabled        *bool                                           `json:"userUpdateEnabled,omitempty"`
}
