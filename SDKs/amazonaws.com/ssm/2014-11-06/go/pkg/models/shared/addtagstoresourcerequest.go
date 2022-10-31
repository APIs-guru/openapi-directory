package shared

type AddTagsToResourceRequest struct {
	ResourceID   string                     `json:"ResourceId"`
	ResourceType ResourceTypeForTaggingEnum `json:"ResourceType"`
	Tags         []Tag                      `json:"Tags"`
}
