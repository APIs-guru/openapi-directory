package shared



type ListArtifactsResponse struct {
    Artifacts []Artifact `json:"artifacts,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

