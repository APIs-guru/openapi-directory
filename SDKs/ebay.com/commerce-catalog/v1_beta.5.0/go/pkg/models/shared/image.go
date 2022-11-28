package shared

// Image
// This type contains information about a product image stored in eBay Picture Services (EPS).
type Image struct {
	Height   *int32  `json:"height,omitempty"`
	ImageURL *string `json:"imageUrl,omitempty"`
	Width    *int32  `json:"width,omitempty"`
}
