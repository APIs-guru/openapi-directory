package shared

type ListAssociatedAttributeGroupsResponse struct {
	AttributeGroups []string `json:"attributeGroups"`
	NextToken       *string  `json:"nextToken"`
}
