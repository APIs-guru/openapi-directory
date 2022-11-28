package shared

// ArtifactSearchResults
// Describes the response received when searching for artifacts.
type ArtifactSearchResults struct {
	Artifacts []SearchedArtifact `json:"artifacts"`
	Count     int64              `json:"count"`
}
