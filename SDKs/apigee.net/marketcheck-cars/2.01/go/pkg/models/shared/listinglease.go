package shared

type ListingLease struct {
	DownPayment             *float64 `json:"down_payment"`
	EstimatedMonthlyPayment *float64 `json:"estimated_monthly_payment"`
	LeaseTerm               *int64   `json:"lease_term"`
}
