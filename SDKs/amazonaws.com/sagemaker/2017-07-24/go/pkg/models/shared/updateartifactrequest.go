package shared



type UpdateArtifactRequest struct {
    ArtifactArn string `json:"ArtifactArn"`
    ArtifactName *string `json:"ArtifactName,omitempty"`
    Properties map[string]string `json:"Properties,omitempty"`
    PropertiesToRemove []string `json:"PropertiesToRemove,omitempty"`
    
}

