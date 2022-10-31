package shared



type GetResourceLfTagsRequest struct {
    CatalogID *string `json:"CatalogId,omitempty"`
    Resource Resource `json:"Resource"`
    ShowAssignedLfTags *bool `json:"ShowAssignedLFTags,omitempty"`
    
}

