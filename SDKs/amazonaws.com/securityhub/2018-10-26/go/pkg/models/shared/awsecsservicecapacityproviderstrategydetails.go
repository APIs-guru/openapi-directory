package shared

type AwsEcsServiceCapacityProviderStrategyDetails struct {
	Base             *int64  `json:"Base,omitempty"`
	CapacityProvider *string `json:"CapacityProvider,omitempty"`
	Weight           *int64  `json:"Weight,omitempty"`
}
