package shared

// AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails
// The log configuration specification for the container.
type AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails struct {
	LogDriver     *string                                                                        `json:"LogDriver,omitempty"`
	Options       map[string]string                                                              `json:"Options,omitempty"`
	SecretOptions []AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails `json:"SecretOptions,omitempty"`
}
