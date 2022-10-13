package shared

type DescribeAutomationExecutionsResult struct {
	AutomationExecutionMetadataList []AutomationExecutionMetadata `json:"AutomationExecutionMetadataList"`
	NextToken                       *string                       `json:"NextToken"`
}
