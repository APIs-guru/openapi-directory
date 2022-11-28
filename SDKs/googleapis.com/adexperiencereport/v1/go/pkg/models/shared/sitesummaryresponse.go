package shared

// SiteSummaryResponse
// Response message for GetSiteSummary.
type SiteSummaryResponse struct {
	DesktopSummary *PlatformSummary `json:"desktopSummary,omitempty"`
	MobileSummary  *PlatformSummary `json:"mobileSummary,omitempty"`
	ReviewedSite   *string          `json:"reviewedSite,omitempty"`
}
