package shared

type CreateLfTagRequest struct {
	CatalogID *string  `json:"CatalogId"`
	TagKey    string   `json:"TagKey"`
	TagValues []string `json:"TagValues"`
}
