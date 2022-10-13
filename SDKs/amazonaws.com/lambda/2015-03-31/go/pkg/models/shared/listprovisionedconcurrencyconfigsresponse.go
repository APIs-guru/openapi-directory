package shared

type ListProvisionedConcurrencyConfigsResponse struct {
	NextMarker                    *string                                `json:"NextMarker"`
	ProvisionedConcurrencyConfigs []ProvisionedConcurrencyConfigListItem `json:"ProvisionedConcurrencyConfigs"`
}
