package shared



type ListTagsForResourceOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

