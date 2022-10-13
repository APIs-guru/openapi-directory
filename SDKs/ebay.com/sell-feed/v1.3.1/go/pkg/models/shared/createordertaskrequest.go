package shared

type CreateOrderTaskRequest struct {
	FeedType       *string              `json:"feedType"`
	FilterCriteria *OrderFilterCriteria `json:"filterCriteria"`
	SchemaVersion  *string              `json:"schemaVersion"`
}
