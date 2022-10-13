package shared

type DeleteArtifactRequest struct {
	ArtifactArn *string         `json:"ArtifactArn"`
	Source      *ArtifactSource `json:"Source"`
}
