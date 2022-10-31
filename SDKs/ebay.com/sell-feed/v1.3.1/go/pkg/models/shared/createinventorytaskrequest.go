package shared

type CreateInventoryTaskRequest struct {
	FeedType              *string                  `json:"feedType,omitempty"`
	FilterCriteria        *InventoryFilterCriteria `json:"filterCriteria,omitempty"`
	InventoryFileTemplate *string                  `json:"inventoryFileTemplate,omitempty"`
	SchemaVersion         *string                  `json:"schemaVersion,omitempty"`
}
