package shared

type Image struct {
	ImageBytes   *string      `json:"imageBytes,omitempty"`
	InputConfig  *InputConfig `json:"inputConfig,omitempty"`
	ThumbnailURI *string      `json:"thumbnailUri,omitempty"`
}
