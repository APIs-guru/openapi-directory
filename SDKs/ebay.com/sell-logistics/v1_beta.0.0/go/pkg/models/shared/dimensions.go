package shared

// Dimensions
// This complex type defines the dimensions of a package to be shipped.
type Dimensions struct {
	Height *string `json:"height,omitempty"`
	Length *string `json:"length,omitempty"`
	Unit   *string `json:"unit,omitempty"`
	Width  *string `json:"width,omitempty"`
}
