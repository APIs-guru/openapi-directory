package shared

type DeleteArtifactRequest struct {
	ArtifactArn *string         `json:"ArtifactArn,omitempty"`
	Source      *ArtifactSource `json:"Source,omitempty"`
}
