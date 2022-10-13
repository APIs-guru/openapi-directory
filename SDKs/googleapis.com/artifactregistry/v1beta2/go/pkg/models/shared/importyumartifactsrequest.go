package shared

type ImportYumArtifactsRequest struct {
	GcsSource *ImportYumArtifactsGcsSource `json:"gcsSource"`
}
