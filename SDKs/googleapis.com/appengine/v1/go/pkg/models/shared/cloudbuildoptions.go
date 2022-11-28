package shared

// CloudBuildOptions
// Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly.
type CloudBuildOptions struct {
	AppYamlPath       *string `json:"appYamlPath,omitempty"`
	CloudBuildTimeout *string `json:"cloudBuildTimeout,omitempty"`
}
