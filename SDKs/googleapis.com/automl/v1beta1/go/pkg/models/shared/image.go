package shared

// Image
// A representation of an image. Only images up to 30MB in size are supported.
type Image struct {
	ImageBytes   *string      `json:"imageBytes,omitempty"`
	InputConfig  *InputConfig `json:"inputConfig,omitempty"`
	ThumbnailURI *string      `json:"thumbnailUri,omitempty"`
}
