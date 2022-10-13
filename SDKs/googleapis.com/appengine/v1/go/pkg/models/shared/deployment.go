package shared

type Deployment struct {
	CloudBuildOptions *CloudBuildOptions  `json:"cloudBuildOptions"`
	Container         *ContainerInfo      `json:"container"`
	Files             map[string]FileInfo `json:"files"`
	Zip               *ZipInfo            `json:"zip"`
}
