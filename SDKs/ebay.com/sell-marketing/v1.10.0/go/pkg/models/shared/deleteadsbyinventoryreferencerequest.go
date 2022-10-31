package shared

type DeleteAdsByInventoryReferenceRequest struct {
	InventoryReferenceID   *string `json:"inventoryReferenceId,omitempty"`
	InventoryReferenceType *string `json:"inventoryReferenceType,omitempty"`
}
