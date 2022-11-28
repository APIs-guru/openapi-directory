package shared

type OpportunitiesFilter struct {
	CompanyID      *string  `queryParam:"name=company_id"`
	MonetaryAmount *float64 `queryParam:"name=monetary_amount"`
	Status         *string  `queryParam:"name=status"`
	Title          *string  `queryParam:"name=title"`
	WinProbability *float64 `queryParam:"name=win_probability"`
}
