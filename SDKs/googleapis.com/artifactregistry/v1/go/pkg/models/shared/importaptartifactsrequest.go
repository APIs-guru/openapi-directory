package shared

type ImportAptArtifactsRequest struct {
	GcsSource *ImportAptArtifactsGcsSource `json:"gcsSource"`
}
