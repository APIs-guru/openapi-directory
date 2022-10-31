package shared

type TaxRatesFilter struct {
	Assets      *bool `queryParam:"name=assets"`
	Equity      *bool `queryParam:"name=equity"`
	Expenses    *bool `queryParam:"name=expenses"`
	Liabilities *bool `queryParam:"name=liabilities"`
	Revenue     *bool `queryParam:"name=revenue"`
}
