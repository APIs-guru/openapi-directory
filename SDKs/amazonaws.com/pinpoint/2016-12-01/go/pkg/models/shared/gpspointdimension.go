package shared

// GpsPointDimension
// Specifies GPS-based criteria for including or excluding endpoints from a segment.
type GpsPointDimension struct {
	Coordinates       GpsCoordinates `json:"Coordinates"`
	RangeInKilometers *float64       `json:"RangeInKilometers,omitempty"`
}
