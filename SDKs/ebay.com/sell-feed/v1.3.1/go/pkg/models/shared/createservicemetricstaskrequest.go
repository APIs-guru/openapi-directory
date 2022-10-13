package shared

type CreateServiceMetricsTaskRequest struct {
	FeedType       *string                               `json:"feedType"`
	FilterCriteria *CustomerServiceMetricsFilterCriteria `json:"filterCriteria"`
	SchemaVersion  *string                               `json:"schemaVersion"`
}
