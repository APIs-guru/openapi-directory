package shared

// ContainerInfo
// Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment.
type ContainerInfo struct {
	Image *string `json:"image,omitempty"`
}
