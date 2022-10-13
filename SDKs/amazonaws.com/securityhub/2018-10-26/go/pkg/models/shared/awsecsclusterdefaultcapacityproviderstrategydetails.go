package shared

type AwsEcsClusterDefaultCapacityProviderStrategyDetails struct {
	Base             *int64  `json:"Base"`
	CapacityProvider *string `json:"CapacityProvider"`
	Weight           *int64  `json:"Weight"`
}
