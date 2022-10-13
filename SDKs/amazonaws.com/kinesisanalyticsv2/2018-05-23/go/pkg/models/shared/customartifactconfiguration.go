package shared

type CustomArtifactConfiguration struct {
	ArtifactType      ArtifactTypeEnum   `json:"ArtifactType"`
	MavenReference    *MavenReference    `json:"MavenReference"`
	S3ContentLocation *S3ContentLocation `json:"S3ContentLocation"`
}
