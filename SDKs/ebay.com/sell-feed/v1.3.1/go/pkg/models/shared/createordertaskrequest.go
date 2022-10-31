package shared



type CreateOrderTaskRequest struct {
    FeedType *string `json:"feedType,omitempty"`
    FilterCriteria *OrderFilterCriteria `json:"filterCriteria,omitempty"`
    SchemaVersion *string `json:"schemaVersion,omitempty"`
    
}

