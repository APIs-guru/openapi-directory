package shared

// ListAdUnitsResponse
// Response for the ad units list request.
type ListAdUnitsResponse struct {
	AdUnits       []AdUnit `json:"adUnits,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
