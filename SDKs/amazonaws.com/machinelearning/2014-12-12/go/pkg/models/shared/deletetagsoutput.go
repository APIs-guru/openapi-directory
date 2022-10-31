package shared

type DeleteTagsOutput struct {
	ResourceID   *string                   `json:"ResourceId,omitempty"`
	ResourceType *TaggableResourceTypeEnum `json:"ResourceType,omitempty"`
}
