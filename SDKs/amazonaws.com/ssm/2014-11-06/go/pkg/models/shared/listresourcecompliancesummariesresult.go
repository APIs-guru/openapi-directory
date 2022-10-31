package shared

type ListResourceComplianceSummariesResult struct {
	NextToken                      *string                         `json:"NextToken,omitempty"`
	ResourceComplianceSummaryItems []ResourceComplianceSummaryItem `json:"ResourceComplianceSummaryItems,omitempty"`
}
