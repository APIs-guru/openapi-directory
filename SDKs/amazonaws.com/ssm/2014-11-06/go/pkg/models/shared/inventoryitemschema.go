package shared

// InventoryItemSchema
// The inventory item schema definition. Users can use this to compose inventory query filters.
type InventoryItemSchema struct {
	Attributes  []InventoryItemAttribute `json:"Attributes"`
	DisplayName *string                  `json:"DisplayName,omitempty"`
	TypeName    string                   `json:"TypeName"`
	Version     *string                  `json:"Version,omitempty"`
}
