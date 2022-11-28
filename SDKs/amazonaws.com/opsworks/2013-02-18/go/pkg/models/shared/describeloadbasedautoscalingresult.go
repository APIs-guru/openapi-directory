package shared

// DescribeLoadBasedAutoScalingResult
// Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request.
type DescribeLoadBasedAutoScalingResult struct {
	LoadBasedAutoScalingConfigurations []LoadBasedAutoScalingConfiguration `json:"LoadBasedAutoScalingConfigurations,omitempty"`
}
