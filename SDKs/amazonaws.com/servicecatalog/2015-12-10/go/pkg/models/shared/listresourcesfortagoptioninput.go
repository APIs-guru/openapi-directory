package shared



type ListResourcesForTagOptionInput struct {
    PageSize *int64 `json:"PageSize,omitempty"`
    PageToken *string `json:"PageToken,omitempty"`
    ResourceType *string `json:"ResourceType,omitempty"`
    TagOptionID string `json:"TagOptionId"`
    
}

