package shared

// GenerateNetworkReportRequest
// Request to generate an AdMob Network report.
type GenerateNetworkReportRequest struct {
	ReportSpec *NetworkReportSpec `json:"reportSpec,omitempty"`
}
