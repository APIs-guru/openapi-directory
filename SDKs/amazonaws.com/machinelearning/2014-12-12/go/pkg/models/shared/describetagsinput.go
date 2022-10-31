package shared



type DescribeTagsInput struct {
    ResourceID string `json:"ResourceId"`
    ResourceType TaggableResourceTypeEnum `json:"ResourceType"`
    
}

