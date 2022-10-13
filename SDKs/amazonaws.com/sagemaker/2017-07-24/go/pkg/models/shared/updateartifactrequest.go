package shared

type UpdateArtifactRequest struct {
	ArtifactArn        string            `json:"ArtifactArn"`
	ArtifactName       *string           `json:"ArtifactName"`
	Properties         map[string]string `json:"Properties"`
	PropertiesToRemove []string          `json:"PropertiesToRemove"`
}
