package shared

// CreateOrderTaskRequest
// The type that defines the fields for the createOrderTask request.
type CreateOrderTaskRequest struct {
	FeedType       *string              `json:"feedType,omitempty"`
	FilterCriteria *OrderFilterCriteria `json:"filterCriteria,omitempty"`
	SchemaVersion  *string              `json:"schemaVersion,omitempty"`
}
