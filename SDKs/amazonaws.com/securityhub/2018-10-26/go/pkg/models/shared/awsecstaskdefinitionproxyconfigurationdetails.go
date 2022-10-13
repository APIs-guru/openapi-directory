package shared

type AwsEcsTaskDefinitionProxyConfigurationDetails struct {
	ContainerName                *string                                                                     `json:"ContainerName"`
	ProxyConfigurationProperties []AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails `json:"ProxyConfigurationProperties"`
	Type                         *string                                                                     `json:"Type"`
}
