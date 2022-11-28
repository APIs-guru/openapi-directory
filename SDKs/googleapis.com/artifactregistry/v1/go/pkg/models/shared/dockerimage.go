package shared

// DockerImage
// DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime
type DockerImage struct {
	BuildTime      *string  `json:"buildTime,omitempty"`
	ImageSizeBytes *string  `json:"imageSizeBytes,omitempty"`
	MediaType      *string  `json:"mediaType,omitempty"`
	Name           *string  `json:"name,omitempty"`
	Tags           []string `json:"tags,omitempty"`
	UpdateTime     *string  `json:"updateTime,omitempty"`
	UploadTime     *string  `json:"uploadTime,omitempty"`
	URI            *string  `json:"uri,omitempty"`
}
