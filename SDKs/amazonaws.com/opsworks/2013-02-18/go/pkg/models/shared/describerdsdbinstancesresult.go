package shared

// DescribeRdsDbInstancesResult
// Contains the response to a <code>DescribeRdsDbInstances</code> request.
type DescribeRdsDbInstancesResult struct {
	RdsDbInstances []RdsDbInstance `json:"RdsDbInstances,omitempty"`
}
