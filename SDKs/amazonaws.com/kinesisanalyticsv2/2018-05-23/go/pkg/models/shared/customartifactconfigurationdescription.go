package shared

// CustomArtifactConfigurationDescription
// Specifies a dependency JAR or a JAR of user-defined functions.
type CustomArtifactConfigurationDescription struct {
	ArtifactType                 *ArtifactTypeEnum  `json:"ArtifactType,omitempty"`
	MavenReferenceDescription    *MavenReference    `json:"MavenReferenceDescription,omitempty"`
	S3ContentLocationDescription *S3ContentLocation `json:"S3ContentLocationDescription,omitempty"`
}
