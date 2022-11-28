package shared

// ArtifactSource
// A structure describing the source of an artifact.
type ArtifactSource struct {
	SourceTypes []ArtifactSourceType `json:"SourceTypes,omitempty"`
	SourceURI   string               `json:"SourceUri"`
}
