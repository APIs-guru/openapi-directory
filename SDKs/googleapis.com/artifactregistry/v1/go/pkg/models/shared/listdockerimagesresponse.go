package shared

type ListDockerImagesResponse struct {
	DockerImages  []DockerImage `json:"dockerImages,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
