package shared

// ImageQuality
// Identifies face image brightness and sharpness.
type ImageQuality struct {
	Brightness *float32 `json:"Brightness,omitempty"`
	Sharpness  *float32 `json:"Sharpness,omitempty"`
}
