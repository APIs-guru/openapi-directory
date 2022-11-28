package shared

// AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails
// A secret to pass to the log configuration.
type AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails struct {
	Name      *string `json:"Name,omitempty"`
	ValueFrom *string `json:"ValueFrom,omitempty"`
}
