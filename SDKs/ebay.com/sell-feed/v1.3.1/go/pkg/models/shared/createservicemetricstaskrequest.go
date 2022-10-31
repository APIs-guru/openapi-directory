package shared



type CreateServiceMetricsTaskRequest struct {
    FeedType *string `json:"feedType,omitempty"`
    FilterCriteria *CustomerServiceMetricsFilterCriteria `json:"filterCriteria,omitempty"`
    SchemaVersion *string `json:"schemaVersion,omitempty"`
    
}

