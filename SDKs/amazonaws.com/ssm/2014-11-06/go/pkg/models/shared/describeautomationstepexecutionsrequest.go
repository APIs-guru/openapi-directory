package shared



type DescribeAutomationStepExecutionsRequest struct {
    AutomationExecutionID string `json:"AutomationExecutionId"`
    Filters []StepExecutionFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ReverseOrder *bool `json:"ReverseOrder,omitempty"`
    
}

