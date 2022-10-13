package shared

type InventoryDeletionSummary struct {
	RemainingCount *int64                         `json:"RemainingCount"`
	SummaryItems   []InventoryDeletionSummaryItem `json:"SummaryItems"`
	TotalCount     *int64                         `json:"TotalCount"`
}
