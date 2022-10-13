package shared

type CreateAdsByInventoryReferenceRequest struct {
	BidPercentage          *string `json:"bidPercentage"`
	InventoryReferenceID   *string `json:"inventoryReferenceId"`
	InventoryReferenceType *string `json:"inventoryReferenceType"`
}
