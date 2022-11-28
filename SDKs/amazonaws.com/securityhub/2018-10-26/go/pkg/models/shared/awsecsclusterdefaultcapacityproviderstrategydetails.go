package shared

// AwsEcsClusterDefaultCapacityProviderStrategyDetails
// The default capacity provider strategy for the cluster. The default capacity provider strategy is used when services or tasks are run without a specified launch type or capacity provider strategy.
type AwsEcsClusterDefaultCapacityProviderStrategyDetails struct {
	Base             *int64  `json:"Base,omitempty"`
	CapacityProvider *string `json:"CapacityProvider,omitempty"`
	Weight           *int64  `json:"Weight,omitempty"`
}
