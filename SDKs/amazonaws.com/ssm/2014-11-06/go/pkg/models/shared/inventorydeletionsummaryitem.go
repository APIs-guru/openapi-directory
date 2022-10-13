package shared

type InventoryDeletionSummaryItem struct {
	Count          *int64  `json:"Count"`
	RemainingCount *int64  `json:"RemainingCount"`
	Version        *string `json:"Version"`
}
