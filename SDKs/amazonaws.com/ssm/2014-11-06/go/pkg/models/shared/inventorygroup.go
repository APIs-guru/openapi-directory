package shared

type InventoryGroup struct {
	Filters []InventoryFilter `json:"Filters"`
	Name    string            `json:"Name"`
}
