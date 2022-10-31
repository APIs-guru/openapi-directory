package shared

type ListProvisionedConcurrencyConfigsResponse struct {
	NextMarker                    *string                                `json:"NextMarker,omitempty"`
	ProvisionedConcurrencyConfigs []ProvisionedConcurrencyConfigListItem `json:"ProvisionedConcurrencyConfigs,omitempty"`
}
