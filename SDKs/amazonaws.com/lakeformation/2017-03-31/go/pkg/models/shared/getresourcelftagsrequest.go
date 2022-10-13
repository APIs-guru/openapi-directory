package shared

type GetResourceLfTagsRequest struct {
	CatalogID          *string  `json:"CatalogId"`
	Resource           Resource `json:"Resource"`
	ShowAssignedLfTags *bool    `json:"ShowAssignedLFTags"`
}
