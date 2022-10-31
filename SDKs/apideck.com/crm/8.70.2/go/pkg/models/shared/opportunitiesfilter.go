package shared

type OpportunitiesFilter struct {
	MonetaryAmount *float64 `queryParam:"name=monetary_amount"`
	Status         *string  `queryParam:"name=status"`
	Title          *string  `queryParam:"name=title"`
	WinProbability *float64 `queryParam:"name=win_probability"`
}
