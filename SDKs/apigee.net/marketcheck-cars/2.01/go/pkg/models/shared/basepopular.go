package shared

type BasePopular struct {
	City          *string     `json:"city,omitempty"`
	Counts        *string     `json:"counts,omitempty"`
	DomStats      *SalesStats `json:"dom_stats,omitempty"`
	InventoryType *string     `json:"inventoryType,omitempty"`
	Make          *string     `json:"make,omitempty"`
	MilesStats    *SalesStats `json:"miles_stats,omitempty"`
	Model         *string     `json:"model,omitempty"`
	PriceStats    *SalesStats `json:"price_stats,omitempty"`
	State         *string     `json:"state,omitempty"`
}
