package shared

type GeoLocation struct {
	Lat *float64 `json:"Lat,omitempty"`
	Lon *float64 `json:"Lon,omitempty"`
}
