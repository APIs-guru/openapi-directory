package shared

// CreateAdsByInventoryReferenceRequest
// This type defines the fields needed to create ads by inventory reference ID request.
type CreateAdsByInventoryReferenceRequest struct {
	BidPercentage          *string `json:"bidPercentage,omitempty"`
	InventoryReferenceID   *string `json:"inventoryReferenceId,omitempty"`
	InventoryReferenceType *string `json:"inventoryReferenceType,omitempty"`
}
