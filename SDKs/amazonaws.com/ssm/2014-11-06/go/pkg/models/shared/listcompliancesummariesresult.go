package shared

type ListComplianceSummariesResult struct {
	ComplianceSummaryItems []ComplianceSummaryItem `json:"ComplianceSummaryItems,omitempty"`
	NextToken              *string                 `json:"NextToken,omitempty"`
}
