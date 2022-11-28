package shared

// GoogleCloudApigeeV1AddonsConfigInput
// Add-on configurations for the Apigee organization.
type GoogleCloudApigeeV1AddonsConfigInput struct {
	AdvancedAPIOpsConfig     *GoogleCloudApigeeV1AdvancedAPIOpsConfig          `json:"advancedApiOpsConfig,omitempty"`
	APISecurityConfig        *GoogleCloudApigeeV1APISecurityConfigInput        `json:"apiSecurityConfig,omitempty"`
	ConnectorsPlatformConfig *GoogleCloudApigeeV1ConnectorsPlatformConfigInput `json:"connectorsPlatformConfig,omitempty"`
	IntegrationConfig        *GoogleCloudApigeeV1IntegrationConfig             `json:"integrationConfig,omitempty"`
	MonetizationConfig       *GoogleCloudApigeeV1MonetizationConfig            `json:"monetizationConfig,omitempty"`
}
