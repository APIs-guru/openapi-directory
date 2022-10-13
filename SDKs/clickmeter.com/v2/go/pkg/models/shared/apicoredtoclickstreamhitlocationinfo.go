package shared

type APICoreDtoClickStreamHitLocationInfo struct {
	Areacode     *string  `json:"areacode"`
	City         *string  `json:"city"`
	Country      *string  `json:"country"`
	Latitude     *float64 `json:"latitude"`
	Longitude    *float64 `json:"longitude"`
	Metrocode    *string  `json:"metrocode"`
	Organization *string  `json:"organization"`
	Postalcode   *string  `json:"postalcode"`
	Region       *string  `json:"region"`
	RegionName   *string  `json:"regionName"`
}
