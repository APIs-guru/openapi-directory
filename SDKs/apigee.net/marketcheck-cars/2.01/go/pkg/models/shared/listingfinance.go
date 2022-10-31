package shared



type ListingFinance struct {
    DownPayment *float64 `json:"down_payment,omitempty"`
    DownPaymentPercentage *float64 `json:"down_payment_percentage,omitempty"`
    EstimatedMonthlyPayment *float64 `json:"estimated_monthly_payment,omitempty"`
    LoanApr *float64 `json:"loan_apr,omitempty"`
    LoanTerm *int64 `json:"loan_term,omitempty"`
    
}

