package shared



type ProvisioningPreferences struct {
    StackSetAccounts []string `json:"StackSetAccounts,omitempty"`
    StackSetFailureToleranceCount *int64 `json:"StackSetFailureToleranceCount,omitempty"`
    StackSetFailureTolerancePercentage *int64 `json:"StackSetFailureTolerancePercentage,omitempty"`
    StackSetMaxConcurrencyCount *int64 `json:"StackSetMaxConcurrencyCount,omitempty"`
    StackSetMaxConcurrencyPercentage *int64 `json:"StackSetMaxConcurrencyPercentage,omitempty"`
    StackSetRegions []string `json:"StackSetRegions,omitempty"`
    
}

