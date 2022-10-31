package shared

type DeleteLfTagRequest struct {
	CatalogID *string `json:"CatalogId,omitempty"`
	TagKey    string  `json:"TagKey"`
}
