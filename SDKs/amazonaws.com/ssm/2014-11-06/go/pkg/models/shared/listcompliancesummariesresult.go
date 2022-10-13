package shared

type ListComplianceSummariesResult struct {
	ComplianceSummaryItems []ComplianceSummaryItem `json:"ComplianceSummaryItems"`
	NextToken              *string                 `json:"NextToken"`
}
