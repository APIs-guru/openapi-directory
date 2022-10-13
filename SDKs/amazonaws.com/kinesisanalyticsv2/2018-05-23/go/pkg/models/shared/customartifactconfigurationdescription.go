package shared

type CustomArtifactConfigurationDescription struct {
	ArtifactType                 *ArtifactTypeEnum  `json:"ArtifactType"`
	MavenReferenceDescription    *MavenReference    `json:"MavenReferenceDescription"`
	S3ContentLocationDescription *S3ContentLocation `json:"S3ContentLocationDescription"`
}
