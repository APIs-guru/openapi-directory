package shared

// ImageConfig
// ImageConfig defines the control plane images to run.
type ImageConfig struct {
	StableImage *string `json:"stableImage,omitempty"`
	TargetImage *string `json:"targetImage,omitempty"`
}
