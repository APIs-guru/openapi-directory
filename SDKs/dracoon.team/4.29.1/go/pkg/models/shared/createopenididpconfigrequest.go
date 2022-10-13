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

type CreateOpenIDIdpConfigRequest struct {
	AuthorizationEndPointURL string                                          `json:"authorizationEndPointUrl"`
	ClientID                 string                                          `json:"clientId"`
	ClientSecret             string                                          `json:"clientSecret"`
	FallbackMappingClaim     *string                                         `json:"fallbackMappingClaim"`
	Flow                     *CreateOpenIDIdpConfigRequestFlowEnum           `json:"flow"`
	Issuer                   string                                          `json:"issuer"`
	JwksEndPointURL          string                                          `json:"jwksEndPointUrl"`
	MappingClaim             string                                          `json:"mappingClaim"`
	Name                     string                                          `json:"name"`
	PkceChallengeMethod      *string                                         `json:"pkceChallengeMethod"`
	PkceEnabled              *bool                                           `json:"pkceEnabled"`
	RedirectUris             []string                                        `json:"redirectUris"`
	Scopes                   []string                                        `json:"scopes"`
	TokenEndPointURL         string                                          `json:"tokenEndPointUrl"`
	UserImportEnabled        *bool                                           `json:"userImportEnabled"`
	UserImportGroup          *int64                                          `json:"userImportGroup"`
	UserInfoEndPointURL      string                                          `json:"userInfoEndPointUrl"`
	UserInfoSource           *CreateOpenIDIdpConfigRequestUserInfoSourceEnum `json:"userInfoSource"`
	UserManagementURL        *string                                         `json:"userManagementUrl"`
	UserUpdateEnabled        *bool                                           `json:"userUpdateEnabled"`
}
