package shared

// ComplianceSummary
// This type is the base type for the getListingViolationsSummary response. The violationSummaries container contains an array of policy violation counts for each unique eBay marketplace and compliance type violation.
type ComplianceSummary struct {
	ViolationSummaries []ComplianceSummaryInfo `json:"violationSummaries,omitempty"`
}
