package shared

// CreateServiceMetricsTaskRequest
// The type that defines the fields for the Customer Service Metric reports generated with the Feed API.
type CreateServiceMetricsTaskRequest struct {
	FeedType       *string                               `json:"feedType,omitempty"`
	FilterCriteria *CustomerServiceMetricsFilterCriteria `json:"filterCriteria,omitempty"`
	SchemaVersion  *string                               `json:"schemaVersion,omitempty"`
}
