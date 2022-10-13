package shared

type ListAdUnitsResponse struct {
	AdUnits       []AdUnit `json:"adUnits"`
	NextPageToken *string  `json:"nextPageToken"`
}
