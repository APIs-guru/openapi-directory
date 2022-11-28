package shared

// DescribeStacksResult
// Contains the response to a <code>DescribeStacks</code> request.
type DescribeStacksResult struct {
	Stacks []Stack `json:"Stacks,omitempty"`
}
