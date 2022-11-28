package shared

// InventoryDeletionSummary
// Information about the delete operation.
type InventoryDeletionSummary struct {
	RemainingCount *int64                         `json:"RemainingCount,omitempty"`
	SummaryItems   []InventoryDeletionSummaryItem `json:"SummaryItems,omitempty"`
	TotalCount     *int64                         `json:"TotalCount,omitempty"`
}
