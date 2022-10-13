package shared

type ConnectorAuthTypeEnum string

const (
	ConnectorAuthTypeEnumOauth2 ConnectorAuthTypeEnum = "oauth2"
	ConnectorAuthTypeEnumAPIKey ConnectorAuthTypeEnum = "apiKey"
	ConnectorAuthTypeEnumBasic  ConnectorAuthTypeEnum = "basic"
	ConnectorAuthTypeEnumCustom ConnectorAuthTypeEnum = "custom"
	ConnectorAuthTypeEnumNone   ConnectorAuthTypeEnum = "none"
)

type ConnectorOauthCredentialsSourceEnum string

const (
	ConnectorOauthCredentialsSourceEnumIntegration ConnectorOauthCredentialsSourceEnum = "integration"
	ConnectorOauthCredentialsSourceEnumConnection  ConnectorOauthCredentialsSourceEnum = "connection"
)

type ConnectorOauthGrantTypeEnum string

const (
	ConnectorOauthGrantTypeEnumAuthorizationCode ConnectorOauthGrantTypeEnum = "authorization_code"
	ConnectorOauthGrantTypeEnumClientCredentials ConnectorOauthGrantTypeEnum = "client_credentials"
)

type ConnectorOauthScopes struct {
	DefaultApis []string `json:"default_apis"`
	ID          *string  `json:"id"`
	Label       *string  `json:"label"`
}

type ConnectorSupportedEvents struct {
	DownstreamEventType *string `json:"downstream_event_type"`
	EventType           *string `json:"event_type"`
	ResourceID          *string `json:"resource_id"`
}

type ConnectorSupportedResources struct {
	DownstreamID   *string             `json:"downstream_id"`
	DownstreamName *string             `json:"downstream_name"`
	ID             *string             `json:"id"`
	Name           *string             `json:"name"`
	Status         *ResourceStatusEnum `json:"status"`
}

type ConnectorUnifiedApisOauthScopes struct {
	ID    *string `json:"id"`
	Label *string `json:"label"`
}

type ConnectorUnifiedApis struct {
	ID          *UnifiedAPIIDEnum                 `json:"id"`
	OauthScopes []ConnectorUnifiedApisOauthScopes `json:"oauth_scopes"`
}

type Connector struct {
	AuthOnly               *bool                                `json:"auth_only"`
	AuthType               *ConnectorAuthTypeEnum               `json:"auth_type"`
	ConfigurableResources  []string                             `json:"configurable_resources"`
	Description            *string                              `json:"description"`
	Docs                   []ConnectorDoc                       `json:"docs"`
	HasSandboxCredentials  *bool                                `json:"has_sandbox_credentials"`
	IconURL                *string                              `json:"icon_url"`
	ID                     *string                              `json:"id"`
	LogoURL                *string                              `json:"logo_url"`
	Name                   *string                              `json:"name"`
	OauthCredentialsSource *ConnectorOauthCredentialsSourceEnum `json:"oauth_credentials_source"`
	OauthGrantType         *ConnectorOauthGrantTypeEnum         `json:"oauth_grant_type"`
	OauthScopes            []ConnectorOauthScopes               `json:"oauth_scopes"`
	ServiceID              *string                              `json:"service_id"`
	Settings               []ConnectorSetting                   `json:"settings"`
	Status                 *ConnectorStatusEnum                 `json:"status"`
	SupportedEvents        []ConnectorSupportedEvents           `json:"supported_events"`
	SupportedResources     []ConnectorSupportedResources        `json:"supported_resources"`
	UnifiedApis            []ConnectorUnifiedApis               `json:"unified_apis"`
	WebsiteURL             *string                              `json:"website_url"`
}
