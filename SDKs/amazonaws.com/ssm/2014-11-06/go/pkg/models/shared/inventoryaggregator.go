package shared

type InventoryAggregator struct {
	Aggregators []InventoryAggregator `json:"Aggregators"`
	Expression  *string               `json:"Expression"`
	Groups      []InventoryGroup      `json:"Groups"`
}
