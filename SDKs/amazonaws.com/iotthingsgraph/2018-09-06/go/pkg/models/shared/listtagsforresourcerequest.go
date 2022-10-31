package shared



type ListTagsForResourceRequest struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ResourceArn string `json:"resourceArn"`
    
}

