package shared

type EndpointLocation struct {
	City       *string  `json:"City,omitempty"`
	Country    *string  `json:"Country,omitempty"`
	Latitude   *float64 `json:"Latitude,omitempty"`
	Longitude  *float64 `json:"Longitude,omitempty"`
	PostalCode *string  `json:"PostalCode,omitempty"`
	Region     *string  `json:"Region,omitempty"`
}
