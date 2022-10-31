package shared

type Image struct {
	Height   *string `json:"height,omitempty"`
	ImageURL *string `json:"imageUrl,omitempty"`
	Width    *string `json:"width,omitempty"`
}
