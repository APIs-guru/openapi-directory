package shared

type ComplianceSummaryItem struct {
	ComplianceType      *string              `json:"ComplianceType"`
	CompliantSummary    *CompliantSummary    `json:"CompliantSummary"`
	NonCompliantSummary *NonCompliantSummary `json:"NonCompliantSummary"`
}
