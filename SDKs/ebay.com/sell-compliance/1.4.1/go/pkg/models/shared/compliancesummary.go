package shared

type ComplianceSummary struct {
	ViolationSummaries []ComplianceSummaryInfo `json:"violationSummaries,omitempty"`
}
