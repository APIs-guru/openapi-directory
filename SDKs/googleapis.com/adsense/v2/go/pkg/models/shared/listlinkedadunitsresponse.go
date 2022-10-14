package shared

type ListLinkedAdUnitsResponse struct {
	AdUnits       []AdUnit `json:"adUnits,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
