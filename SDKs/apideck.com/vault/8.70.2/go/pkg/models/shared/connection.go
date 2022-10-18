package shared

type ConnectionConfigurationDefaultsTargetEnum string

const (
	ConnectionConfigurationDefaultsTargetEnumCustomFields ConnectionConfigurationDefaultsTargetEnum = "custom_fields"
	ConnectionConfigurationDefaultsTargetEnumResource     ConnectionConfigurationDefaultsTargetEnum = "resource"
)

type ConnectionConfigurationDefaults struct {
	ID      *string                                    `json:"id,omitempty"`
	Options []interface{}                              `json:"options,omitempty"`
	Target  *ConnectionConfigurationDefaultsTargetEnum `json:"target,omitempty"`
	Value   *interface{}                               `json:"value,omitempty"`
}

type ConnectionConfiguration struct {
	Defaults []ConnectionConfigurationDefaults `json:"defaults,omitempty"`
	Resource *string                           `json:"resource,omitempty"`
}

type ConnectionStatusEnum string

const (
	ConnectionStatusEnumLive      ConnectionStatusEnum = "live"
	ConnectionStatusEnumUpcoming  ConnectionStatusEnum = "upcoming"
	ConnectionStatusEnumRequested ConnectionStatusEnum = "requested"
)

type Connection struct {
	AuthType                         *AuthTypeEnum             `json:"auth_type,omitempty"`
	AuthorizeURL                     *string                   `json:"authorize_url,omitempty"`
	ConfigurableResources            []string                  `json:"configurable_resources,omitempty"`
	Configuration                    []ConnectionConfiguration `json:"configuration,omitempty"`
	CreatedAt                        *float64                  `json:"created_at,omitempty"`
	Enabled                          *bool                     `json:"enabled,omitempty"`
	FormFields                       []FormField               `json:"form_fields,omitempty"`
	HasGuide                         *bool                     `json:"has_guide,omitempty"`
	Icon                             *string                   `json:"icon,omitempty"`
	ID                               *string                   `json:"id,omitempty"`
	Logo                             *string                   `json:"logo,omitempty"`
	Metadata                         map[string]interface{}    `json:"metadata,omitempty"`
	Name                             *string                   `json:"name,omitempty"`
	OauthGrantType                   *OAuthGrantTypeEnum       `json:"oauth_grant_type,omitempty"`
	ResourceSchemaSupport            []string                  `json:"resource_schema_support,omitempty"`
	ResourceSettingsSupport          []string                  `json:"resource_settings_support,omitempty"`
	RevokeURL                        *string                   `json:"revoke_url,omitempty"`
	ServiceID                        *string                   `json:"service_id,omitempty"`
	Settings                         map[string]interface{}    `json:"settings,omitempty"`
	SettingsRequiredForAuthorization []string                  `json:"settings_required_for_authorization,omitempty"`
	State                            *ConnectionStateEnum      `json:"state,omitempty"`
	Status                           *ConnectionStatusEnum     `json:"status,omitempty"`
	TagLine                          *string                   `json:"tag_line,omitempty"`
	UnifiedAPI                       *string                   `json:"unified_api,omitempty"`
	UpdatedAt                        *float64                  `json:"updated_at,omitempty"`
	Website                          *string                   `json:"website,omitempty"`
}
