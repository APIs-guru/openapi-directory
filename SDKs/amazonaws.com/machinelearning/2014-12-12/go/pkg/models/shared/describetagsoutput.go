package shared

type DescribeTagsOutput struct {
	ResourceID   *string                   `json:"ResourceId"`
	ResourceType *TaggableResourceTypeEnum `json:"ResourceType"`
	Tags         []Tag                     `json:"Tags"`
}
