package shared

// InventoryReference
// This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID.
type InventoryReference struct {
	InventoryReferenceID   *string `json:"inventoryReferenceId,omitempty"`
	InventoryReferenceType *string `json:"inventoryReferenceType,omitempty"`
}
