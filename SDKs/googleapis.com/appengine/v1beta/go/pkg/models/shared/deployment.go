package shared

type Deployment struct {
	Build             *BuildInfo          `json:"build"`
	CloudBuildOptions *CloudBuildOptions  `json:"cloudBuildOptions"`
	Container         *ContainerInfo      `json:"container"`
	Files             map[string]FileInfo `json:"files"`
	Zip               *ZipInfo            `json:"zip"`
}
