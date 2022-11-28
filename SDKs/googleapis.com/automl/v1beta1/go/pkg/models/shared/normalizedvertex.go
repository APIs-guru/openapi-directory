package shared

// NormalizedVertex
// A vertex represents a 2D point in the image. The normalized vertex coordinates are between 0 to 1 fractions relative to the original plane (image, video). E.g. if the plane (e.g. whole image) would have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would be at the position (1, 6) on that plane.
type NormalizedVertex struct {
	X *float32 `json:"x,omitempty"`
	Y *float32 `json:"y,omitempty"`
}
