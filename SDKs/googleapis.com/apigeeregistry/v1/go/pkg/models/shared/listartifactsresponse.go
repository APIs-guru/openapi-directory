package shared

// ListArtifactsResponse
// Response message for ListArtifacts.
type ListArtifactsResponse struct {
	Artifacts     []Artifact `json:"artifacts,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
