package shared

// DescribeInstancesResult
// Contains the response to a <code>DescribeInstances</code> request.
type DescribeInstancesResult struct {
	Instances []Instance `json:"Instances,omitempty"`
}
