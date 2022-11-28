package shared

// GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig
// ImageConfig defines the control plane images to run.
type GoogleCloudBeyondcorpAppconnectorsV1alphaImageConfig struct {
	StableImage *string `json:"stableImage,omitempty"`
	TargetImage *string `json:"targetImage,omitempty"`
}
