package shared



type RemoveTagsFromResourceRequest struct {
    ResourceID string `json:"ResourceId"`
    ResourceType ResourceTypeForTaggingEnum `json:"ResourceType"`
    TagKeys []string `json:"TagKeys"`
    
}

