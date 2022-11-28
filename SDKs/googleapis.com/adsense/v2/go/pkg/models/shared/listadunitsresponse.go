package shared

// ListAdUnitsResponse
// Response definition for the adunit list rpc.
type ListAdUnitsResponse struct {
	AdUnits       []AdUnit `json:"adUnits,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
