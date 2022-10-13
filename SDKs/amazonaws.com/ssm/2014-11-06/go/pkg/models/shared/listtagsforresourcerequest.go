package shared

type ListTagsForResourceRequest struct {
	ResourceID   string                     `json:"ResourceId"`
	ResourceType ResourceTypeForTaggingEnum `json:"ResourceType"`
}
