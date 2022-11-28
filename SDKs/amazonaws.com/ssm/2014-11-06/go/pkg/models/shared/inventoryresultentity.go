package shared

// InventoryResultEntity
// Inventory query results.
type InventoryResultEntity struct {
	Data map[string]InventoryResultItem `json:"Data,omitempty"`
	ID   *string                        `json:"Id,omitempty"`
}
