package shared



type CreateAdsByInventoryReferenceRequest struct {
    BidPercentage *string `json:"bidPercentage,omitempty"`
    InventoryReferenceID *string `json:"inventoryReferenceId,omitempty"`
    InventoryReferenceType *string `json:"inventoryReferenceType,omitempty"`
    
}

