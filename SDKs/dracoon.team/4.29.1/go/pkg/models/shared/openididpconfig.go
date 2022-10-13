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
	AuthorizationEndPointURL *string                            `json:"authorizationEndPointUrl"`
	ClientID                 *string                            `json:"clientId"`
	ClientSecret             *string                            `json:"clientSecret"`
	FallbackMappingClaim     *string                            `json:"fallbackMappingClaim"`
	Flow                     *OpenIDIdpConfigFlowEnum           `json:"flow"`
	ID                       int32                              `json:"id"`
	Issuer                   *string                            `json:"issuer"`
	JwksEndPointURL          *string                            `json:"jwksEndPointUrl"`
	MappingClaim             *string                            `json:"mappingClaim"`
	Name                     *string                            `json:"name"`
	PkceChallengeMethod      *string                            `json:"pkceChallengeMethod"`
	PkceEnabled              *bool                              `json:"pkceEnabled"`
	RedirectUris             []string                           `json:"redirectUris"`
	Scopes                   []string                           `json:"scopes"`
	TokenEndPointURL         *string                            `json:"tokenEndPointUrl"`
	UserImportEnabled        *bool                              `json:"userImportEnabled"`
	UserImportGroup          *int64                             `json:"userImportGroup"`
	UserInfoEndPointURL      *string                            `json:"userInfoEndPointUrl"`
	UserInfoSource           *OpenIDIdpConfigUserInfoSourceEnum `json:"userInfoSource"`
	UserManagementURL        *string                            `json:"userManagementUrl"`
	UserUpdateEnabled        *bool                              `json:"userUpdateEnabled"`
}
