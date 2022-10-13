package shared

type AwsEcsClusterDetails struct {
	CapacityProviders               []string                                              `json:"CapacityProviders"`
	ClusterSettings                 []AwsEcsClusterClusterSettingsDetails                 `json:"ClusterSettings"`
	Configuration                   *AwsEcsClusterConfigurationDetails                    `json:"Configuration"`
	DefaultCapacityProviderStrategy []AwsEcsClusterDefaultCapacityProviderStrategyDetails `json:"DefaultCapacityProviderStrategy"`
}
