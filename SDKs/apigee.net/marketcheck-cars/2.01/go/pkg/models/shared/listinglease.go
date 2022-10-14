package shared

type ListingLease struct {
	DownPayment             *float64 `json:"down_payment,omitempty"`
	EstimatedMonthlyPayment *float64 `json:"estimated_monthly_payment,omitempty"`
	LeaseTerm               *int64   `json:"lease_term,omitempty"`
}
