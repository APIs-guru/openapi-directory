package shared

type BasePopular struct {
	City          *string     `json:"city"`
	Counts        *string     `json:"counts"`
	DomStats      *SalesStats `json:"dom_stats"`
	InventoryType *string     `json:"inventoryType"`
	Make          *string     `json:"make"`
	MilesStats    *SalesStats `json:"miles_stats"`
	Model         *string     `json:"model"`
	PriceStats    *SalesStats `json:"price_stats"`
	State         *string     `json:"state"`
}
