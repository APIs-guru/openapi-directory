package shared

type UpdateProvisioningPreferences struct {
	StackSetAccounts                   []string                   `json:"StackSetAccounts"`
	StackSetFailureToleranceCount      *int64                     `json:"StackSetFailureToleranceCount"`
	StackSetFailureTolerancePercentage *int64                     `json:"StackSetFailureTolerancePercentage"`
	StackSetMaxConcurrencyCount        *int64                     `json:"StackSetMaxConcurrencyCount"`
	StackSetMaxConcurrencyPercentage   *int64                     `json:"StackSetMaxConcurrencyPercentage"`
	StackSetOperationType              *StackSetOperationTypeEnum `json:"StackSetOperationType"`
	StackSetRegions                    []string                   `json:"StackSetRegions"`
}
