package shared



type ListAssociatedAttributeGroupsResponse struct {
    AttributeGroups []string `json:"attributeGroups,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

