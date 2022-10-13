package shared

type ThirdPartyDependenciesData struct {
	ArtifactID  string   `json:"artifactId"`
	Description string   `json:"description"`
	GroupID     string   `json:"groupId"`
	ID          string   `json:"id"`
	Licenses    []string `json:"licenses"`
	Name        string   `json:"name"`
	Type        string   `json:"type"`
	URL         string   `json:"url"`
	Version     string   `json:"version"`
}
