package shared

type UpdateLfTagRequest struct {
	CatalogID         *string  `json:"CatalogId"`
	TagKey            string   `json:"TagKey"`
	TagValuesToAdd    []string `json:"TagValuesToAdd"`
	TagValuesToDelete []string `json:"TagValuesToDelete"`
}
