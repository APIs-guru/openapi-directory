package shared

// ReportFooter
// Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
type ReportFooter struct {
	MatchingRowCount *string         `json:"matchingRowCount,omitempty"`
	Warnings         []ReportWarning `json:"warnings,omitempty"`
}
