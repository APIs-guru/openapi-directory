package shared



type ListRepositoriesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Repositories []Repository `json:"repositories,omitempty"`
    
}

