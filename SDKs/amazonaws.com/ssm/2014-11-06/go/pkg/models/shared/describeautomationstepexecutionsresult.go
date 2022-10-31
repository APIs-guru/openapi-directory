package shared



type DescribeAutomationStepExecutionsResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    StepExecutions []StepExecution `json:"StepExecutions,omitempty"`
    
}

