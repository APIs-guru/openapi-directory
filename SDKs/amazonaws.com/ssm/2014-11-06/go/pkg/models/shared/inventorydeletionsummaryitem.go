package shared

// InventoryDeletionSummaryItem
// Either a count, remaining count, or a version number in a delete inventory summary.
type InventoryDeletionSummaryItem struct {
	Count          *int64  `json:"Count,omitempty"`
	RemainingCount *int64  `json:"RemainingCount,omitempty"`
	Version        *string `json:"Version,omitempty"`
}
