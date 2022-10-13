package shared

type CreateArtifactRequest struct {
	ArtifactName       *string             `json:"ArtifactName"`
	ArtifactType       string              `json:"ArtifactType"`
	MetadataProperties *MetadataProperties `json:"MetadataProperties"`
	Properties         map[string]string   `json:"Properties"`
	Source             ArtifactSource      `json:"Source"`
	Tags               []Tag               `json:"Tags"`
}
