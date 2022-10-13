package shared

type PageMetadata struct {
	Description *string  `json:"description"`
	Keywords    []string `json:"keywords"`
	Segments    []string `json:"segments"`
}
