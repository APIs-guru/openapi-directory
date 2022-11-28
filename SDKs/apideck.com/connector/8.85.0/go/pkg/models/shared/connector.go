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
	ConnectorOauthGrantTypeEnumPassword          ConnectorOauthGrantTypeEnum = "password"
)

type ConnectorOauthScopes struct {
	DefaultApis []string `json:"default_apis,omitempty"`
	ID          *string  `json:"id,omitempty"`
	Label       *string  `json:"label,omitempty"`
}

type ConnectorTLSSupport struct {
	Description *string `json:"description,omitempty"`
	Type        *string `json:"type,omitempty"`
}

// ConnectorUnifiedApisOauthScopes
// OAuth scopes required for the connector. Add these scopes to your OAuth app.
type ConnectorUnifiedApisOauthScopes struct {
	ID    *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
}

type ConnectorUnifiedApis struct {
	DownstreamUnsupportedResources []string                          `json:"downstream_unsupported_resources,omitempty"`
	ID                             *UnifiedAPIIDEnum                 `json:"id,omitempty"`
	Name                           *string                           `json:"name,omitempty"`
	OauthScopes                    []ConnectorUnifiedApisOauthScopes `json:"oauth_scopes,omitempty"`
	SupportedEvents                []ConnectorEvent                  `json:"supported_events,omitempty"`
	SupportedResources             []LinkedConnectorResource         `json:"supported_resources,omitempty"`
}

type Connector struct {
	AuthOnly               *bool                                `json:"auth_only,omitempty"`
	AuthType               *ConnectorAuthTypeEnum               `json:"auth_type,omitempty"`
	BlindMapped            *bool                                `json:"blind_mapped,omitempty"`
	ConfigurableResources  []string                             `json:"configurable_resources,omitempty"`
	CustomScopes           *bool                                `json:"custom_scopes,omitempty"`
	Description            *string                              `json:"description,omitempty"`
	Docs                   []ConnectorDoc                       `json:"docs,omitempty"`
	FreeTrialAvailable     *bool                                `json:"free_trial_available,omitempty"`
	HasSandboxCredentials  *bool                                `json:"has_sandbox_credentials,omitempty"`
	IconURL                *string                              `json:"icon_url,omitempty"`
	ID                     *string                              `json:"id,omitempty"`
	LogoURL                *string                              `json:"logo_url,omitempty"`
	Name                   *string                              `json:"name,omitempty"`
	OauthCredentialsSource *ConnectorOauthCredentialsSourceEnum `json:"oauth_credentials_source,omitempty"`
	OauthGrantType         *ConnectorOauthGrantTypeEnum         `json:"oauth_grant_type,omitempty"`
	OauthScopes            []ConnectorOauthScopes               `json:"oauth_scopes,omitempty"`
	ServiceID              *string                              `json:"service_id,omitempty"`
	Settings               []ConnectorSetting                   `json:"settings,omitempty"`
	SignupURL              *string                              `json:"signup_url,omitempty"`
	Status                 *ConnectorStatusEnum                 `json:"status,omitempty"`
	SupportedEvents        []ConnectorEvent                     `json:"supported_events,omitempty"`
	SupportedResources     []LinkedConnectorResource            `json:"supported_resources,omitempty"`
	TLSSupport             *ConnectorTLSSupport                 `json:"tls_support,omitempty"`
	UnifiedApis            []ConnectorUnifiedApis               `json:"unified_apis,omitempty"`
	WebhookSupport         map[string]interface{}               `json:"webhook_support,omitempty"`
	WebsiteURL             *string                              `json:"website_url,omitempty"`
}
