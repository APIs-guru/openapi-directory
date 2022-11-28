package shared

// DeleteTagsOutput
// Amazon ML returns the following elements.
type DeleteTagsOutput struct {
	ResourceID   *string                   `json:"ResourceId,omitempty"`
	ResourceType *TaggableResourceTypeEnum `json:"ResourceType,omitempty"`
}
