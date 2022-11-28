package shared

// LfTagPair
// A structure containing a tag key-value pair.
type LfTagPair struct {
	CatalogID *string  `json:"CatalogId,omitempty"`
	TagKey    string   `json:"TagKey"`
	TagValues []string `json:"TagValues"`
}
