package shared

type DeleteLfTagRequest struct {
	CatalogID *string `json:"CatalogId"`
	TagKey    string  `json:"TagKey"`
}
