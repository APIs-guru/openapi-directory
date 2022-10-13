package shared

type DescribeAutomationExecutionsRequest struct {
	Filters    []AutomationExecutionFilter `json:"Filters"`
	MaxResults *int64                      `json:"MaxResults"`
	NextToken  *string                     `json:"NextToken"`
}
