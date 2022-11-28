package shared

// OperationSummary
// A complex type that contains information about an operation that matches the criteria that you specified in a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a> request.
type OperationSummary struct {
	ID     *string              `json:"Id,omitempty"`
	Status *OperationStatusEnum `json:"Status,omitempty"`
}
