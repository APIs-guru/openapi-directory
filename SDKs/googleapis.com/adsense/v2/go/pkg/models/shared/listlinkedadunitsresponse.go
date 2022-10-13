package shared

type ListLinkedAdUnitsResponse struct {
	AdUnits       []AdUnit `json:"adUnits"`
	NextPageToken *string  `json:"nextPageToken"`
}
