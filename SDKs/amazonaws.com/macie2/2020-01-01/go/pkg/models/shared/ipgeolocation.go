package shared

// IPGeoLocation
// Provides geographic coordinates that indicate where a specified IP address originated from.
type IPGeoLocation struct {
	Lat *float64 `json:"lat,omitempty"`
	Lon *float64 `json:"lon,omitempty"`
}
