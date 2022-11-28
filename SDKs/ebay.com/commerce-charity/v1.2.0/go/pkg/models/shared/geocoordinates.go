package shared

// GeoCoordinates
// Defines the format of a geographic coordinate.
type GeoCoordinates struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}
