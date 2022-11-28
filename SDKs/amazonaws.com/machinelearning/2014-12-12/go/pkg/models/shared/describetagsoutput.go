package shared

// DescribeTagsOutput
// Amazon ML returns the following elements.
type DescribeTagsOutput struct {
	ResourceID   *string                   `json:"ResourceId,omitempty"`
	ResourceType *TaggableResourceTypeEnum `json:"ResourceType,omitempty"`
	Tags         []Tag                     `json:"Tags,omitempty"`
}
