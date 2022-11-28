package shared

// ListMavenArtifactsResponse
// The response from listing maven artifacts.
type ListMavenArtifactsResponse struct {
	MavenArtifacts []MavenArtifact `json:"mavenArtifacts,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
}
