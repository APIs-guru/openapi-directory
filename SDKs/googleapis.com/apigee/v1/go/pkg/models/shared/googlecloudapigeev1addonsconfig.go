package shared

type GoogleCloudApigeeV1AddonsConfig struct {
	AdvancedAPIOpsConfig     *GoogleCloudApigeeV1AdvancedAPIOpsConfig     `json:"advancedApiOpsConfig"`
	APISecurityConfig        *GoogleCloudApigeeV1APISecurityConfig        `json:"apiSecurityConfig"`
	ConnectorsPlatformConfig *GoogleCloudApigeeV1ConnectorsPlatformConfig `json:"connectorsPlatformConfig"`
	IntegrationConfig        *GoogleCloudApigeeV1IntegrationConfig        `json:"integrationConfig"`
	MonetizationConfig       *GoogleCloudApigeeV1MonetizationConfig       `json:"monetizationConfig"`
}
