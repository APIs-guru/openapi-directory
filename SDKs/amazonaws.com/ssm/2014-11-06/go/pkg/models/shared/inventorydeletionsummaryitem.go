package shared



type InventoryDeletionSummaryItem struct {
    Count *int64 `json:"Count,omitempty"`
    RemainingCount *int64 `json:"RemainingCount,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}

