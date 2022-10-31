package shared

type CreateArtifactRequest struct {
	ArtifactName       *string             `json:"ArtifactName,omitempty"`
	ArtifactType       string              `json:"ArtifactType"`
	MetadataProperties *MetadataProperties `json:"MetadataProperties,omitempty"`
	Properties         map[string]string   `json:"Properties,omitempty"`
	Source             ArtifactSource      `json:"Source"`
	Tags               []Tag               `json:"Tags,omitempty"`
}
