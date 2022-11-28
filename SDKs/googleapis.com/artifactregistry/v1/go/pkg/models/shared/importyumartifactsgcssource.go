package shared

// ImportYumArtifactsGcsSource
// Google Cloud Storage location where the artifacts currently reside.
type ImportYumArtifactsGcsSource struct {
	Uris         []string `json:"uris,omitempty"`
	UseWildcards *bool    `json:"useWildcards,omitempty"`
}
