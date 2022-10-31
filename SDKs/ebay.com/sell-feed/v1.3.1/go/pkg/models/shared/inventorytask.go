package shared



type InventoryTask struct {
    CompletionDate *string `json:"completionDate,omitempty"`
    CreationDate *string `json:"creationDate,omitempty"`
    DetailHref *string `json:"detailHref,omitempty"`
    FeedType *string `json:"feedType,omitempty"`
    FilterCriteria *InventoryFilterCriteria `json:"filterCriteria,omitempty"`
    InventoryFileTemplate *string `json:"inventoryFileTemplate,omitempty"`
    SchemaVersion *string `json:"schemaVersion,omitempty"`
    Status *string `json:"status,omitempty"`
    TaskID *string `json:"taskId,omitempty"`
    UploadSummary *UploadSummary `json:"uploadSummary,omitempty"`
    
}

