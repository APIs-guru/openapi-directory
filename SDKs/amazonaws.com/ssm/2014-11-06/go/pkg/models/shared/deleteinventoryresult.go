package shared



type DeleteInventoryResult struct {
    DeletionID *string `json:"DeletionId,omitempty"`
    DeletionSummary *InventoryDeletionSummary `json:"DeletionSummary,omitempty"`
    TypeName *string `json:"TypeName,omitempty"`
    
}

