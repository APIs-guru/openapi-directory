package shared

type GetAttributeValuesResponse struct {
	AttributeValues []AttributeValue `json:"AttributeValues"`
	NextToken       *string          `json:"NextToken"`
}
