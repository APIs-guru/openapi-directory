package shared

// ImportAptArtifactsRequest
// The request to import new apt artifacts.
type ImportAptArtifactsRequest struct {
	GcsSource *ImportAptArtifactsGcsSource `json:"gcsSource,omitempty"`
}
