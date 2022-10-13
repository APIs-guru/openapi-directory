package shared

type ConnectionConfigurationDefaultsTargetEnum string

const (
	ConnectionConfigurationDefaultsTargetEnumCustomFields ConnectionConfigurationDefaultsTargetEnum = "custom_fields"
	ConnectionConfigurationDefaultsTargetEnumResource     ConnectionConfigurationDefaultsTargetEnum = "resource"
)

type ConnectionConfigurationDefaults struct {
	ID      *string                                    `json:"id"`
	Options []interface{}                              `json:"options"`
	Target  *ConnectionConfigurationDefaultsTargetEnum `json:"target"`
	Value   *interface{}                               `json:"value"`
}

type ConnectionConfiguration struct {
	Defaults []ConnectionConfigurationDefaults `json:"defaults"`
	Resource *string                           `json:"resource"`
}

type ConnectionStatusEnum string

const (
	ConnectionStatusEnumLive      ConnectionStatusEnum = "live"
	ConnectionStatusEnumUpcoming  ConnectionStatusEnum = "upcoming"
	ConnectionStatusEnumRequested ConnectionStatusEnum = "requested"
)

type Connection struct {
	AuthType                         *AuthTypeEnum             `json:"auth_type"`
	AuthorizeURL                     *string                   `json:"authorize_url"`
	ConfigurableResources            []string                  `json:"configurable_resources"`
	Configuration                    []ConnectionConfiguration `json:"configuration"`
	CreatedAt                        *float64                  `json:"created_at"`
	Enabled                          *bool                     `json:"enabled"`
	FormFields                       []FormField               `json:"form_fields"`
	HasGuide                         *bool                     `json:"has_guide"`
	Icon                             *string                   `json:"icon"`
	ID                               *string                   `json:"id"`
	Logo                             *string                   `json:"logo"`
	Metadata                         map[string]interface{}    `json:"metadata"`
	Name                             *string                   `json:"name"`
	OauthGrantType                   *OAuthGrantTypeEnum       `json:"oauth_grant_type"`
	ResourceSchemaSupport            []string                  `json:"resource_schema_support"`
	ResourceSettingsSupport          []string                  `json:"resource_settings_support"`
	RevokeURL                        *string                   `json:"revoke_url"`
	ServiceID                        *string                   `json:"service_id"`
	Settings                         map[string]interface{}    `json:"settings"`
	SettingsRequiredForAuthorization []string                  `json:"settings_required_for_authorization"`
	State                            *ConnectionStateEnum      `json:"state"`
	Status                           *ConnectionStatusEnum     `json:"status"`
	TagLine                          *string                   `json:"tag_line"`
	UnifiedAPI                       *string                   `json:"unified_api"`
	UpdatedAt                        *float64                  `json:"updated_at"`
	Website                          *string                   `json:"website"`
}
