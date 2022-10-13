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

type UpdateOpenIDIdpConfigRequest struct {
	AuthorizationEndPointURL  *string                                         `json:"authorizationEndPointUrl"`
	ClientID                  *string                                         `json:"clientId"`
	ClientSecret              *string                                         `json:"clientSecret"`
	FallbackMappingClaim      *string                                         `json:"fallbackMappingClaim"`
	Flow                      *UpdateOpenIDIdpConfigRequestFlowEnum           `json:"flow"`
	Issuer                    *string                                         `json:"issuer"`
	JwksEndPointURL           *string                                         `json:"jwksEndPointUrl"`
	MappingClaim              *string                                         `json:"mappingClaim"`
	Name                      *string                                         `json:"name"`
	PkceChallengeMethod       *string                                         `json:"pkceChallengeMethod"`
	PkceEnabled               *bool                                           `json:"pkceEnabled"`
	RedirectUris              []string                                        `json:"redirectUris"`
	ResetFallbackMappingClaim *bool                                           `json:"resetFallbackMappingClaim"`
	Scopes                    []string                                        `json:"scopes"`
	TokenEndPointURL          *string                                         `json:"tokenEndPointUrl"`
	UserImportEnabled         *bool                                           `json:"userImportEnabled"`
	UserImportGroup           *int64                                          `json:"userImportGroup"`
	UserInfoEndPointURL       *string                                         `json:"userInfoEndPointUrl"`
	UserInfoSource            *UpdateOpenIDIdpConfigRequestUserInfoSourceEnum `json:"userInfoSource"`
	UserManagementURL         *string                                         `json:"userManagementUrl"`
	UserUpdateEnabled         *bool                                           `json:"userUpdateEnabled"`
}
