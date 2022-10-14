package shared

type APICoreDtoClickStreamHitLocationInfo struct {
	Areacode     *string  `json:"areacode,omitempty"`
	City         *string  `json:"city,omitempty"`
	Country      *string  `json:"country,omitempty"`
	Latitude     *float64 `json:"latitude,omitempty"`
	Longitude    *float64 `json:"longitude,omitempty"`
	Metrocode    *string  `json:"metrocode,omitempty"`
	Organization *string  `json:"organization,omitempty"`
	Postalcode   *string  `json:"postalcode,omitempty"`
	Region       *string  `json:"region,omitempty"`
	RegionName   *string  `json:"regionName,omitempty"`
}
