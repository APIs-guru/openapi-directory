package shared

type RemoveLfTagsFromResourceRequest struct {
	CatalogID *string     `json:"CatalogId"`
	LfTags    []LfTagPair `json:"LFTags"`
	Resource  Resource    `json:"Resource"`
}
