package shared

// Image
// The logo of the charitable organization.
type Image struct {
	Height   *string `json:"height,omitempty"`
	ImageURL *string `json:"imageUrl,omitempty"`
	Width    *string `json:"width,omitempty"`
}
