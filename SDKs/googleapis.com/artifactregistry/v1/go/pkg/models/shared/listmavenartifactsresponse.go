package shared

type ListMavenArtifactsResponse struct {
	MavenArtifacts []MavenArtifact `json:"mavenArtifacts"`
	NextPageToken  *string         `json:"nextPageToken"`
}
