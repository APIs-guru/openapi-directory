package shared

// Deployment
// Code and application artifacts used to deploy a version to App Engine.
type Deployment struct {
	Build             *BuildInfo          `json:"build,omitempty"`
	CloudBuildOptions *CloudBuildOptions  `json:"cloudBuildOptions,omitempty"`
	Container         *ContainerInfo      `json:"container,omitempty"`
	Files             map[string]FileInfo `json:"files,omitempty"`
	Zip               *ZipInfo            `json:"zip,omitempty"`
}
