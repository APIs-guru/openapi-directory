package shared



type GetSystemTemplateRevisionsRequest struct {
    ID string `json:"id"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

