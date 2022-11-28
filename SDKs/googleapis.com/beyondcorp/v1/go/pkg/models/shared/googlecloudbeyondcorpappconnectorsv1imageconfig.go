package shared

// GoogleCloudBeyondcorpAppconnectorsV1ImageConfig
// ImageConfig defines the control plane images to run.
type GoogleCloudBeyondcorpAppconnectorsV1ImageConfig struct {
	StableImage *string `json:"stableImage,omitempty"`
	TargetImage *string `json:"targetImage,omitempty"`
}
