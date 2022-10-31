package shared

type ListAdUnitsResponse struct {
	AdUnits       []AdUnit `json:"adUnits,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
