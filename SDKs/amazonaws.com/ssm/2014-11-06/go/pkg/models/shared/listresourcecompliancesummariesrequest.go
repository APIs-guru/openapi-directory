package shared

type ListResourceComplianceSummariesRequest struct {
	Filters    []ComplianceStringFilter `json:"Filters"`
	MaxResults *int64                   `json:"MaxResults"`
	NextToken  *string                  `json:"NextToken"`
}
