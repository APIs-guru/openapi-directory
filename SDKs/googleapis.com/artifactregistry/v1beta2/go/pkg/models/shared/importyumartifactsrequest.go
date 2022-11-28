package shared

// ImportYumArtifactsRequest
// The request to import new yum artifacts.
type ImportYumArtifactsRequest struct {
	GcsSource *ImportYumArtifactsGcsSource `json:"gcsSource,omitempty"`
}
