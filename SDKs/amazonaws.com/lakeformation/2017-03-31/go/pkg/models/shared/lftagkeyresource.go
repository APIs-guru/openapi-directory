package shared

// LfTagKeyResource
// A structure containing a tag key and values for a resource.
type LfTagKeyResource struct {
	CatalogID *string  `json:"CatalogId,omitempty"`
	TagKey    string   `json:"TagKey"`
	TagValues []string `json:"TagValues"`
}
