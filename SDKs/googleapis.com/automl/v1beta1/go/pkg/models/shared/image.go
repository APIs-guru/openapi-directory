package shared

type Image struct {
	ImageBytes   *string      `json:"imageBytes"`
	InputConfig  *InputConfig `json:"inputConfig"`
	ThumbnailURI *string      `json:"thumbnailUri"`
}
