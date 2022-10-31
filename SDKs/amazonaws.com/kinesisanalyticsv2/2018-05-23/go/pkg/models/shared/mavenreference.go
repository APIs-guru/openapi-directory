package shared

type MavenReference struct {
	ArtifactID string `json:"ArtifactId"`
	GroupID    string `json:"GroupId"`
	Version    string `json:"Version"`
}
