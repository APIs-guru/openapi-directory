package shared

type AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails struct {
	LogDriver     *string                                                                        `json:"LogDriver"`
	Options       map[string]string                                                              `json:"Options"`
	SecretOptions []AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails `json:"SecretOptions"`
}
