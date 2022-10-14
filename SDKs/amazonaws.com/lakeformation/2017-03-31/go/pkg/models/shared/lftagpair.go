package shared

type LfTagPair struct {
	CatalogID *string  `json:"CatalogId,omitempty"`
	TagKey    string   `json:"TagKey"`
	TagValues []string `json:"TagValues"`
}
