package shared

// DescribeTimeBasedAutoScalingResult
// Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.
type DescribeTimeBasedAutoScalingResult struct {
	TimeBasedAutoScalingConfigurations []TimeBasedAutoScalingConfiguration `json:"TimeBasedAutoScalingConfigurations,omitempty"`
}
