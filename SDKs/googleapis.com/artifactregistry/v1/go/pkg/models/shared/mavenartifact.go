package shared

// MavenArtifact
// MavenArtifact represents a maven artifact.
type MavenArtifact struct {
	ArtifactID *string `json:"artifactId,omitempty"`
	CreateTime *string `json:"createTime,omitempty"`
	GroupID    *string `json:"groupId,omitempty"`
	Name       *string `json:"name,omitempty"`
	PomURI     *string `json:"pomUri,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
	Version    *string `json:"version,omitempty"`
}
