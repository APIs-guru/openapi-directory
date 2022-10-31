package shared



type GetAttributeValuesResponse struct {
    AttributeValues []AttributeValue `json:"AttributeValues,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

