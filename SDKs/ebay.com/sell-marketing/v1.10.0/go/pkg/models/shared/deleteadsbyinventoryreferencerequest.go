package shared

// DeleteAdsByInventoryReferenceRequest
// This type defines the fields needed to delete an ad by its inventory reference ID. You must always supply both inventory_reference_id and inventory_reference_type.
type DeleteAdsByInventoryReferenceRequest struct {
	InventoryReferenceID   *string `json:"inventoryReferenceId,omitempty"`
	InventoryReferenceType *string `json:"inventoryReferenceType,omitempty"`
}
