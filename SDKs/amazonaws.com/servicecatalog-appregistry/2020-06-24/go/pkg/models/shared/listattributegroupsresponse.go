package shared



type ListAttributeGroupsResponse struct {
    AttributeGroups []AttributeGroupSummary `json:"attributeGroups,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

