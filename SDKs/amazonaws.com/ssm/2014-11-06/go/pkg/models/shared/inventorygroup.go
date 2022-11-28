package shared

// InventoryGroup
// A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.
type InventoryGroup struct {
	Filters []InventoryFilter `json:"Filters"`
	Name    string            `json:"Name"`
}
