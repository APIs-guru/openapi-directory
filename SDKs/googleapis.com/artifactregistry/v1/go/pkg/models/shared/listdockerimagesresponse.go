package shared

// ListDockerImagesResponse
// The response from listing docker images.
type ListDockerImagesResponse struct {
	DockerImages  []DockerImage `json:"dockerImages,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
