package shared



type ListTagsForResourceResponse struct {
    Arn *string `json:"Arn,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

