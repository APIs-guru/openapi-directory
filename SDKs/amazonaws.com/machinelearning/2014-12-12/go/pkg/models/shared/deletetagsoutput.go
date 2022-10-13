package shared

type DeleteTagsOutput struct {
	ResourceID   *string                   `json:"ResourceId"`
	ResourceType *TaggableResourceTypeEnum `json:"ResourceType"`
}
