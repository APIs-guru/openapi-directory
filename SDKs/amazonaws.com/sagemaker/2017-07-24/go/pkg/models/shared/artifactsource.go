package shared

type ArtifactSource struct {
	SourceTypes []ArtifactSourceType `json:"SourceTypes"`
	SourceURI   string               `json:"SourceUri"`
}
