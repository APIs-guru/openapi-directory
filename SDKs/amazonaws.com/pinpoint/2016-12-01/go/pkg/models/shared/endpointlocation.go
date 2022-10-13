package shared

type EndpointLocation struct {
	City       *string  `json:"City"`
	Country    *string  `json:"Country"`
	Latitude   *float64 `json:"Latitude"`
	Longitude  *float64 `json:"Longitude"`
	PostalCode *string  `json:"PostalCode"`
	Region     *string  `json:"Region"`
}
