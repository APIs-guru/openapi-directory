package shared

type ListingFinance struct {
	DownPayment             *float64 `json:"down_payment"`
	DownPaymentPercentage   *float64 `json:"down_payment_percentage"`
	EstimatedMonthlyPayment *float64 `json:"estimated_monthly_payment"`
	LoanApr                 *float64 `json:"loan_apr"`
	LoanTerm                *int64   `json:"loan_term"`
}
