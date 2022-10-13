package shared

type SiteSummaryResponse struct {
	DesktopSummary *PlatformSummary `json:"desktopSummary"`
	MobileSummary  *PlatformSummary `json:"mobileSummary"`
	ReviewedSite   *string          `json:"reviewedSite"`
}
