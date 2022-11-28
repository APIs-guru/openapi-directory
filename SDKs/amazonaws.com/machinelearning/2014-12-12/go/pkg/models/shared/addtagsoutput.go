package shared

// AddTagsOutput
// Amazon ML returns the following elements.
type AddTagsOutput struct {
	ResourceID   *string                   `json:"ResourceId,omitempty"`
	ResourceType *TaggableResourceTypeEnum `json:"ResourceType,omitempty"`
}
