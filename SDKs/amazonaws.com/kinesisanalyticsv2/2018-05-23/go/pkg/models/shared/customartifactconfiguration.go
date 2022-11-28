package shared

// CustomArtifactConfiguration
// Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).
type CustomArtifactConfiguration struct {
	ArtifactType      ArtifactTypeEnum   `json:"ArtifactType"`
	MavenReference    *MavenReference    `json:"MavenReference,omitempty"`
	S3ContentLocation *S3ContentLocation `json:"S3ContentLocation,omitempty"`
}
