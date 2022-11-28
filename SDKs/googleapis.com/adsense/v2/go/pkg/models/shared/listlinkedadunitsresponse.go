package shared

// ListLinkedAdUnitsResponse
// Response definition for the ad units linked to a custom channel list rpc.
type ListLinkedAdUnitsResponse struct {
	AdUnits       []AdUnit `json:"adUnits,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
