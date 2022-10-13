package shared

type DescribeAutomationStepExecutionsResult struct {
	NextToken      *string         `json:"NextToken"`
	StepExecutions []StepExecution `json:"StepExecutions"`
}
