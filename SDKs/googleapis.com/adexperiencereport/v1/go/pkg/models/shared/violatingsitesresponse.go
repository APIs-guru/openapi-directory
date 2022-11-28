package shared

// ViolatingSitesResponse
// Response message for ListViolatingSites.
type ViolatingSitesResponse struct {
	ViolatingSites []SiteSummaryResponse `json:"violatingSites,omitempty"`
}
