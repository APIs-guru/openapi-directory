package shared

type InventoryTask struct {
	CompletionDate        *string                  `json:"completionDate"`
	CreationDate          *string                  `json:"creationDate"`
	DetailHref            *string                  `json:"detailHref"`
	FeedType              *string                  `json:"feedType"`
	FilterCriteria        *InventoryFilterCriteria `json:"filterCriteria"`
	InventoryFileTemplate *string                  `json:"inventoryFileTemplate"`
	SchemaVersion         *string                  `json:"schemaVersion"`
	Status                *string                  `json:"status"`
	TaskID                *string                  `json:"taskId"`
	UploadSummary         *UploadSummary           `json:"uploadSummary"`
}
