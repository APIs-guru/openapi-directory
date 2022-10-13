package shared

type DeleteInventoryResult struct {
	DeletionID      *string                   `json:"DeletionId"`
	DeletionSummary *InventoryDeletionSummary `json:"DeletionSummary"`
	TypeName        *string                   `json:"TypeName"`
}
