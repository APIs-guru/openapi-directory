package shared

type DescribeAutomationStepExecutionsRequest struct {
	AutomationExecutionID string                `json:"AutomationExecutionId"`
	Filters               []StepExecutionFilter `json:"Filters"`
	MaxResults            *int64                `json:"MaxResults"`
	NextToken             *string               `json:"NextToken"`
	ReverseOrder          *bool                 `json:"ReverseOrder"`
}
