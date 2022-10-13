package shared

type ReportFooter struct {
	MatchingRowCount *string         `json:"matchingRowCount"`
	Warnings         []ReportWarning `json:"warnings"`
}
