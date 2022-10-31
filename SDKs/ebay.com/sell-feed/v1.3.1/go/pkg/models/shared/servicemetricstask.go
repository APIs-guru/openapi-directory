package shared



type ServiceMetricsTask struct {
    CompletionDate *string `json:"completionDate,omitempty"`
    CreationDate *string `json:"creationDate,omitempty"`
    DetailHref *string `json:"detailHref,omitempty"`
    FeedType *string `json:"feedType,omitempty"`
    FilterCriteria *CustomerServiceMetricsFilterCriteria `json:"filterCriteria,omitempty"`
    SchemaVersion *string `json:"schemaVersion,omitempty"`
    Status *string `json:"status,omitempty"`
    TaskID *string `json:"taskId,omitempty"`
    
}

