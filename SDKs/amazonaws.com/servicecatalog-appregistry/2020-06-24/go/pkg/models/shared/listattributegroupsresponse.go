package shared

type ListAttributeGroupsResponse struct {
	AttributeGroups []AttributeGroupSummary `json:"attributeGroups"`
	NextToken       *string                 `json:"nextToken"`
}
