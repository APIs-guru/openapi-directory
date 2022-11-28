package shared

// GeoLocation
// Provides the latitude and longitude coordinates of a location.
type GeoLocation struct {
	Lat *float64 `json:"Lat,omitempty"`
	Lon *float64 `json:"Lon,omitempty"`
}
