package shared



type DescribeTagsOutput struct {
    ResourceID *string `json:"ResourceId,omitempty"`
    ResourceType *TaggableResourceTypeEnum `json:"ResourceType,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

