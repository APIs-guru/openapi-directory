package shared

type Sales struct {
	City          *string     `json:"city"`
	Counts        *int64      `json:"counts"`
	Cpo           *int64      `json:"cpo"`
	DomStats      *SalesStats `json:"dom_stats"`
	InventoryType *string     `json:"inventory_type"`
	Make          *string     `json:"make"`
	MilesStats    *SalesStats `json:"miles_stats"`
	Model         *string     `json:"model"`
	NonCpo        *int64      `json:"non-cpo"`
	PriceStats    *SalesStats `json:"price_stats"`
	State         *string     `json:"state"`
	TaxonomyVin   *string     `json:"taxonomy_vin"`
	Trim          *string     `json:"trim"`
	Year          *string     `json:"year"`
}
