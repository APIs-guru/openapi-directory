package shared

type CloudBuildOptions struct {
	AppYamlPath       *string `json:"appYamlPath"`
	CloudBuildTimeout *string `json:"cloudBuildTimeout"`
}
