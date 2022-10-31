package shared



type SiteSummaryResponse struct {
    DesktopSummary *PlatformSummary `json:"desktopSummary,omitempty"`
    MobileSummary *PlatformSummary `json:"mobileSummary,omitempty"`
    ReviewedSite *string `json:"reviewedSite,omitempty"`
    
}

