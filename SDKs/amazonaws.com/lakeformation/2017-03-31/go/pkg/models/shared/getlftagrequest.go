package shared

type GetLfTagRequest struct {
	CatalogID *string `json:"CatalogId"`
	TagKey    string  `json:"TagKey"`
}
