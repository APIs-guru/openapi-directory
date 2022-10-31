package shared

type OpenIDIdpConfigFlowEnum string

const (
	OpenIDIdpConfigFlowEnumAuthorizationCode OpenIDIdpConfigFlowEnum = "authorization_code"
	OpenIDIdpConfigFlowEnumHybrid            OpenIDIdpConfigFlowEnum = "hybrid"
)

type OpenIDIdpConfigUserInfoSourceEnum string

const (
	OpenIDIdpConfigUserInfoSourceEnumUserInfoEndpoint OpenIDIdpConfigUserInfoSourceEnum = "user_info_endpoint"
	OpenIDIdpConfigUserInfoSourceEnumIDToken          OpenIDIdpConfigUserInfoSourceEnum = "id_token"
)

type OpenIDIdpConfig struct {
	AuthorizationEndPointURL *string                            `json:"authorizationEndPointUrl,omitempty"`
	ClientID                 *string                            `json:"clientId,omitempty"`
	ClientSecret             *string                            `json:"clientSecret,omitempty"`
	FallbackMappingClaim     *string                            `json:"fallbackMappingClaim,omitempty"`
	Flow                     *OpenIDIdpConfigFlowEnum           `json:"flow,omitempty"`
	ID                       int32                              `json:"id"`
	Issuer                   *string                            `json:"issuer,omitempty"`
	JwksEndPointURL          *string                            `json:"jwksEndPointUrl,omitempty"`
	MappingClaim             *string                            `json:"mappingClaim,omitempty"`
	Name                     *string                            `json:"name,omitempty"`
	PkceChallengeMethod      *string                            `json:"pkceChallengeMethod,omitempty"`
	PkceEnabled              *bool                              `json:"pkceEnabled,omitempty"`
	RedirectUris             []string                           `json:"redirectUris,omitempty"`
	Scopes                   []string                           `json:"scopes,omitempty"`
	TokenEndPointURL         *string                            `json:"tokenEndPointUrl,omitempty"`
	UserImportEnabled        *bool                              `json:"userImportEnabled,omitempty"`
	UserImportGroup          *int64                             `json:"userImportGroup,omitempty"`
	UserInfoEndPointURL      *string                            `json:"userInfoEndPointUrl,omitempty"`
	UserInfoSource           *OpenIDIdpConfigUserInfoSourceEnum `json:"userInfoSource,omitempty"`
	UserManagementURL        *string                            `json:"userManagementUrl,omitempty"`
	UserUpdateEnabled        *bool                              `json:"userUpdateEnabled,omitempty"`
}
