package shared



type ListMavenArtifactsResponse struct {
    MavenArtifacts []MavenArtifact `json:"mavenArtifacts,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

