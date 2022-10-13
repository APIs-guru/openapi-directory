package shared

type AddTagsOutput struct {
	ResourceID   *string                   `json:"ResourceId"`
	ResourceType *TaggableResourceTypeEnum `json:"ResourceType"`
}
