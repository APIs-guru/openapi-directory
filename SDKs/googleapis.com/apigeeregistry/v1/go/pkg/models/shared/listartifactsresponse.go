package shared

type ListArtifactsResponse struct {
	Artifacts     []Artifact `json:"artifacts"`
	NextPageToken *string    `json:"nextPageToken"`
}
