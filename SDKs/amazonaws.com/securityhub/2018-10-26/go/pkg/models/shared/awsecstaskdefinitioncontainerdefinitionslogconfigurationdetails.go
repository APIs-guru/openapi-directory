package shared



type AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails struct {
    LogDriver *string `json:"LogDriver,omitempty"`
    Options map[string]string `json:"Options,omitempty"`
    SecretOptions []AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails `json:"SecretOptions,omitempty"`
    
}

