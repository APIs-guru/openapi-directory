package shared

type LfTagKeyResource struct {
	CatalogID *string  `json:"CatalogId"`
	TagKey    string   `json:"TagKey"`
	TagValues []string `json:"TagValues"`
}
