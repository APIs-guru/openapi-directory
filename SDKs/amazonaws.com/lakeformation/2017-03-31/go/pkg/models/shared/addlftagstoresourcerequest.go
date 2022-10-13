package shared

type AddLfTagsToResourceRequest struct {
	CatalogID *string     `json:"CatalogId"`
	LfTags    []LfTagPair `json:"LFTags"`
	Resource  Resource    `json:"Resource"`
}
