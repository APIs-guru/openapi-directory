package shared



type ComplianceSummaryItem struct {
    ComplianceType *string `json:"ComplianceType,omitempty"`
    CompliantSummary *CompliantSummary `json:"CompliantSummary,omitempty"`
    NonCompliantSummary *NonCompliantSummary `json:"NonCompliantSummary,omitempty"`
    
}

