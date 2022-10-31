package shared

type DescribeActionTargetsResponse struct {
	ActionTargets []ActionTarget `json:"ActionTargets"`
	NextToken     *string        `json:"NextToken,omitempty"`
}
