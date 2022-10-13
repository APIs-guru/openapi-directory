package shared

type CombinedBillingUsage struct {
	DaysLeftInBillingCycle       int64 `json:"days_left_in_billing_cycle"`
	EstimatedPaidStorageForMonth int64 `json:"estimated_paid_storage_for_month"`
	EstimatedStorageForMonth     int64 `json:"estimated_storage_for_month"`
}
