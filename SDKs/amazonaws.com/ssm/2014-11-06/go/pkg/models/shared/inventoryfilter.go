package shared

// InventoryFilter
// One or more filters. Use a filter to return a more specific list of results.
type InventoryFilter struct {
	Key    string                          `json:"Key"`
	Type   *InventoryQueryOperatorTypeEnum `json:"Type,omitempty"`
	Values []string                        `json:"Values"`
}
