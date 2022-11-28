package shared

// Image
// The type that defines the details of an image, such as size and URL.
type Image struct {
	Height   *string `json:"height,omitempty"`
	ImageURL *string `json:"imageUrl,omitempty"`
	Text     *string `json:"text,omitempty"`
	Width    *string `json:"width,omitempty"`
}
