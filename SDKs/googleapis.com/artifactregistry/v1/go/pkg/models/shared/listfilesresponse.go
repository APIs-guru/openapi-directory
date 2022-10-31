package shared



type ListFilesResponse struct {
    Files []GoogleDevtoolsArtifactregistryV1File `json:"files,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

