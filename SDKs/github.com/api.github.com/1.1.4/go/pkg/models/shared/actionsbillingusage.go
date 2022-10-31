package shared

type ActionsBillingUsageMinutesUsedBreakdown struct {
	Macos   *int64 `json:"MACOS,omitempty"`
	Ubuntu  *int64 `json:"UBUNTU,omitempty"`
	Windows *int64 `json:"WINDOWS,omitempty"`
}

type ActionsBillingUsage struct {
	IncludedMinutes      int64                                   `json:"included_minutes"`
	MinutesUsedBreakdown ActionsBillingUsageMinutesUsedBreakdown `json:"minutes_used_breakdown"`
	TotalMinutesUsed     int64                                   `json:"total_minutes_used"`
	TotalPaidMinutesUsed int64                                   `json:"total_paid_minutes_used"`
}
