package shared

// PlaceGeometry
// Places uses a point geometry to specify a location or a Place.
type PlaceGeometry struct {
	Point []float64 `json:"Point,omitempty"`
}
