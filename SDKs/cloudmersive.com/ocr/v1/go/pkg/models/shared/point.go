package shared

// Point
// Point location in 2D in an image, where 0, 0 represents the top/left corner of the image
type Point struct {
	X *int32 `json:"X,omitempty"`
	Y *int32 `json:"Y,omitempty"`
}
