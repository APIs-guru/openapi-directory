package shared

// MavenReference
// The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
type MavenReference struct {
	ArtifactID string `json:"ArtifactId"`
	GroupID    string `json:"GroupId"`
	Version    string `json:"Version"`
}
