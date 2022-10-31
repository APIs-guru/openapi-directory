package shared

type DescribeAutomationExecutionsResult struct {
	AutomationExecutionMetadataList []AutomationExecutionMetadata `json:"AutomationExecutionMetadataList,omitempty"`
	NextToken                       *string                       `json:"NextToken,omitempty"`
}
