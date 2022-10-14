package shared

type UpdateLfTagRequest struct {
	CatalogID         *string  `json:"CatalogId,omitempty"`
	TagKey            string   `json:"TagKey"`
	TagValuesToAdd    []string `json:"TagValuesToAdd,omitempty"`
	TagValuesToDelete []string `json:"TagValuesToDelete,omitempty"`
}
