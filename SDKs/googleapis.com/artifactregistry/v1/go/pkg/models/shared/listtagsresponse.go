package shared



type ListTagsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

