package shared

type InventoryResultEntity struct {
	Data map[string]InventoryResultItem `json:"Data"`
	ID   *string                        `json:"Id"`
}
