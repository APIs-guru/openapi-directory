package shared

type InventoryAggregator struct {
	Aggregators []InventoryAggregator `json:"Aggregators,omitempty"`
	Expression  *string               `json:"Expression,omitempty"`
	Groups      []InventoryGroup      `json:"Groups,omitempty"`
}
