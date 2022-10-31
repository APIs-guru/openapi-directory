package shared



type ListAppsRequest struct {
    AppIds []string `json:"appIds,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

