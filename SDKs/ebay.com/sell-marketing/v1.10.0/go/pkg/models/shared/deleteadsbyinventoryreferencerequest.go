package shared

type DeleteAdsByInventoryReferenceRequest struct {
	InventoryReferenceID   *string `json:"inventoryReferenceId"`
	InventoryReferenceType *string `json:"inventoryReferenceType"`
}
