package shared

// ModelDigests
// Provides information to verify the integrity of stored model artifacts.
type ModelDigests struct {
	ArtifactDigest *string `json:"ArtifactDigest,omitempty"`
}
