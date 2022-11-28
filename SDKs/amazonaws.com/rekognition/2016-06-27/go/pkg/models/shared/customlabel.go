package shared

// CustomLabel
// A custom label detected in an image by a call to <a>DetectCustomLabels</a>.
type CustomLabel struct {
	Confidence *float32  `json:"Confidence,omitempty"`
	Geometry   *Geometry `json:"Geometry,omitempty"`
	Name       *string   `json:"Name,omitempty"`
}
