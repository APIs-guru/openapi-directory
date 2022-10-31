package shared

type GoogleCloudApigeeV1AddonsConfig struct {
	AdvancedAPIOpsConfig     *GoogleCloudApigeeV1AdvancedAPIOpsConfig     `json:"advancedApiOpsConfig,omitempty"`
	APISecurityConfig        *GoogleCloudApigeeV1APISecurityConfig        `json:"apiSecurityConfig,omitempty"`
	ConnectorsPlatformConfig *GoogleCloudApigeeV1ConnectorsPlatformConfig `json:"connectorsPlatformConfig,omitempty"`
	IntegrationConfig        *GoogleCloudApigeeV1IntegrationConfig        `json:"integrationConfig,omitempty"`
	MonetizationConfig       *GoogleCloudApigeeV1MonetizationConfig       `json:"monetizationConfig,omitempty"`
}
