package shared

type AddLfTagsToResourceRequest struct {
	CatalogID *string     `json:"CatalogId,omitempty"`
	LfTags    []LfTagPair `json:"LFTags"`
	Resource  Resource    `json:"Resource"`
}
