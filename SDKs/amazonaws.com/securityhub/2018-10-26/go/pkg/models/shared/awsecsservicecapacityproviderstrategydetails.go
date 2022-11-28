package shared

// AwsEcsServiceCapacityProviderStrategyDetails
// Strategy item for the capacity provider strategy that the service uses.
type AwsEcsServiceCapacityProviderStrategyDetails struct {
	Base             *int64  `json:"Base,omitempty"`
	CapacityProvider *string `json:"CapacityProvider,omitempty"`
	Weight           *int64  `json:"Weight,omitempty"`
}
