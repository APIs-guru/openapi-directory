package shared

type ImageConfig struct {
	StableImage *string `json:"stableImage,omitempty"`
	TargetImage *string `json:"targetImage,omitempty"`
}
