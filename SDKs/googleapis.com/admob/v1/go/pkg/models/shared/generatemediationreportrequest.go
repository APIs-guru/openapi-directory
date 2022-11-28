package shared

// GenerateMediationReportRequest
// Request to generate an AdMob mediation report.
type GenerateMediationReportRequest struct {
	ReportSpec *MediationReportSpec `json:"reportSpec,omitempty"`
}
