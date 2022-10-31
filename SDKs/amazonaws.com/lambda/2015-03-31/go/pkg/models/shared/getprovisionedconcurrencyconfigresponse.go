package shared

type GetProvisionedConcurrencyConfigResponse struct {
	AllocatedProvisionedConcurrentExecutions *int64                                `json:"AllocatedProvisionedConcurrentExecutions,omitempty"`
	AvailableProvisionedConcurrentExecutions *int64                                `json:"AvailableProvisionedConcurrentExecutions,omitempty"`
	LastModified                             *string                               `json:"LastModified,omitempty"`
	RequestedProvisionedConcurrentExecutions *int64                                `json:"RequestedProvisionedConcurrentExecutions,omitempty"`
	Status                                   *ProvisionedConcurrencyStatusEnumEnum `json:"Status,omitempty"`
	StatusReason                             *string                               `json:"StatusReason,omitempty"`
}
