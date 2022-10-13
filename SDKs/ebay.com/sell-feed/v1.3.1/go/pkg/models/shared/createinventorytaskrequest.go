package shared

type CreateInventoryTaskRequest struct {
	FeedType              *string                  `json:"feedType"`
	FilterCriteria        *InventoryFilterCriteria `json:"filterCriteria"`
	InventoryFileTemplate *string                  `json:"inventoryFileTemplate"`
	SchemaVersion         *string                  `json:"schemaVersion"`
}
