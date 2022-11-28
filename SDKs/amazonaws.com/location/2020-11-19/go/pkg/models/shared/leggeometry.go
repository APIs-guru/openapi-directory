package shared

// LegGeometry
// Contains the geometry details for each path between a pair of positions. Used in plotting a route leg on a map.
type LegGeometry struct {
	LineString [][]float64 `json:"LineString,omitempty"`
}
