package shared

// AwsEcsClusterDetails
// provides details about an ECS cluster.
type AwsEcsClusterDetails struct {
	CapacityProviders               []string                                              `json:"CapacityProviders,omitempty"`
	ClusterSettings                 []AwsEcsClusterClusterSettingsDetails                 `json:"ClusterSettings,omitempty"`
	Configuration                   *AwsEcsClusterConfigurationDetails                    `json:"Configuration,omitempty"`
	DefaultCapacityProviderStrategy []AwsEcsClusterDefaultCapacityProviderStrategyDetails `json:"DefaultCapacityProviderStrategy,omitempty"`
}
