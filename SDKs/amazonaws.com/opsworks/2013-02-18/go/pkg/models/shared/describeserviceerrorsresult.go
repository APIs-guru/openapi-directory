package shared

// DescribeServiceErrorsResult
// Contains the response to a <code>DescribeServiceErrors</code> request.
type DescribeServiceErrorsResult struct {
	ServiceErrors []ServiceError `json:"ServiceErrors,omitempty"`
}
