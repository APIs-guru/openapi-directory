package shared

type MavenArtifact struct {
	ArtifactID *string `json:"artifactId"`
	CreateTime *string `json:"createTime"`
	GroupID    *string `json:"groupId"`
	Name       *string `json:"name"`
	PomURI     *string `json:"pomUri"`
	UpdateTime *string `json:"updateTime"`
	Version    *string `json:"version"`
}
