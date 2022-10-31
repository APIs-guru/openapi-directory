package shared



type ListVersionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Versions []Version `json:"versions,omitempty"`
    
}

