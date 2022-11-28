package shared

// InventoryAggregator
// Specifies the inventory type and attribute for the aggregation execution.
type InventoryAggregator struct {
	Aggregators []InventoryAggregator `json:"Aggregators,omitempty"`
	Expression  *string               `json:"Expression,omitempty"`
	Groups      []InventoryGroup      `json:"Groups,omitempty"`
}
