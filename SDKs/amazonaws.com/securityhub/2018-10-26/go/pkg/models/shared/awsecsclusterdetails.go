package shared



type AwsEcsClusterDetails struct {
    CapacityProviders []string `json:"CapacityProviders,omitempty"`
    ClusterSettings []AwsEcsClusterClusterSettingsDetails `json:"ClusterSettings,omitempty"`
    Configuration *AwsEcsClusterConfigurationDetails `json:"Configuration,omitempty"`
    DefaultCapacityProviderStrategy []AwsEcsClusterDefaultCapacityProviderStrategyDetails `json:"DefaultCapacityProviderStrategy,omitempty"`
    
}

