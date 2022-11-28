package shared

// UpdateProvisioningPreferences
// The user-defined preferences that will be applied when updating a provisioned product. Not all preferences are applicable to all provisioned product types.
type UpdateProvisioningPreferences struct {
	StackSetAccounts                   []string                   `json:"StackSetAccounts,omitempty"`
	StackSetFailureToleranceCount      *int64                     `json:"StackSetFailureToleranceCount,omitempty"`
	StackSetFailureTolerancePercentage *int64                     `json:"StackSetFailureTolerancePercentage,omitempty"`
	StackSetMaxConcurrencyCount        *int64                     `json:"StackSetMaxConcurrencyCount,omitempty"`
	StackSetMaxConcurrencyPercentage   *int64                     `json:"StackSetMaxConcurrencyPercentage,omitempty"`
	StackSetOperationType              *StackSetOperationTypeEnum `json:"StackSetOperationType,omitempty"`
	StackSetRegions                    []string                   `json:"StackSetRegions,omitempty"`
}
