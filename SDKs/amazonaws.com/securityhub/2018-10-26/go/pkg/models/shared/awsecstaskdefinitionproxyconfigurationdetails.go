package shared

type AwsEcsTaskDefinitionProxyConfigurationDetails struct {
	ContainerName                *string                                                                     `json:"ContainerName,omitempty"`
	ProxyConfigurationProperties []AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails `json:"ProxyConfigurationProperties,omitempty"`
	Type                         *string                                                                     `json:"Type,omitempty"`
}
