package shared

// ImportAptArtifactsGcsSource
// Google Cloud Storage location where the artifacts currently reside.
type ImportAptArtifactsGcsSource struct {
	Uris         []string `json:"uris,omitempty"`
	UseWildcards *bool    `json:"useWildcards,omitempty"`
}
