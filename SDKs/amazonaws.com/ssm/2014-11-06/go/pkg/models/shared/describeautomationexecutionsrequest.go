package shared

type DescribeAutomationExecutionsRequest struct {
	Filters    []AutomationExecutionFilter `json:"Filters,omitempty"`
	MaxResults *int64                      `json:"MaxResults,omitempty"`
	NextToken  *string                     `json:"NextToken,omitempty"`
}
