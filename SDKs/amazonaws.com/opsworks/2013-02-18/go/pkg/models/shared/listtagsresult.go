package shared



type ListTagsResult struct {
    NextToken *string `json:"NextToken,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

