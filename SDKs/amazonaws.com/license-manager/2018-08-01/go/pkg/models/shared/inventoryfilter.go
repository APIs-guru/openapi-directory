package shared

// InventoryFilter
// An inventory filter.
type InventoryFilter struct {
	Condition InventoryFilterConditionEnum `json:"Condition"`
	Name      string                       `json:"Name"`
	Value     *string                      `json:"Value,omitempty"`
}
