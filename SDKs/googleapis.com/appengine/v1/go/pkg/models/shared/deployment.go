package shared



type Deployment struct {
    CloudBuildOptions *CloudBuildOptions `json:"cloudBuildOptions,omitempty"`
    Container *ContainerInfo `json:"container,omitempty"`
    Files map[string]FileInfo `json:"files,omitempty"`
    Zip *ZipInfo `json:"zip,omitempty"`
    
}

