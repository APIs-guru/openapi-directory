package shared

type PutProvisionedConcurrencyConfigResponse struct {
	AllocatedProvisionedConcurrentExecutions *int64                                `json:"AllocatedProvisionedConcurrentExecutions"`
	AvailableProvisionedConcurrentExecutions *int64                                `json:"AvailableProvisionedConcurrentExecutions"`
	LastModified                             *string                               `json:"LastModified"`
	RequestedProvisionedConcurrentExecutions *int64                                `json:"RequestedProvisionedConcurrentExecutions"`
	Status                                   *ProvisionedConcurrencyStatusEnumEnum `json:"Status"`
	StatusReason                             *string                               `json:"StatusReason"`
}
