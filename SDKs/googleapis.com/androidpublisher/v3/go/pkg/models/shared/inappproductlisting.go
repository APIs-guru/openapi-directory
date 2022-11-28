package shared

// InAppProductListing
// Store listing of a single in-app product.
type InAppProductListing struct {
	Benefits    []string `json:"benefits,omitempty"`
	Description *string  `json:"description,omitempty"`
	Title       *string  `json:"title,omitempty"`
}
