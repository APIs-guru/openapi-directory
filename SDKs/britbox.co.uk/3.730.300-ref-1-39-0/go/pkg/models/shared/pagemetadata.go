package shared

// PageMetadata
// Metadata associated with a page. Primarily intended for SEO usage.
type PageMetadata struct {
	Description *string  `json:"description,omitempty"`
	Keywords    []string `json:"keywords,omitempty"`
	Segments    []string `json:"segments,omitempty"`
}
