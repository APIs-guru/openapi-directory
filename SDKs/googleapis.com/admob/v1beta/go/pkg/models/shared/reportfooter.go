package shared



type ReportFooter struct {
    MatchingRowCount *string `json:"matchingRowCount,omitempty"`
    Warnings []ReportWarning `json:"warnings,omitempty"`
    
}

