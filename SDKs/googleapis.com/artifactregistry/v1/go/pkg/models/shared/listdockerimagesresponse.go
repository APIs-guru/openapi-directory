package shared

type ListDockerImagesResponse struct {
	DockerImages  []DockerImage `json:"dockerImages"`
	NextPageToken *string       `json:"nextPageToken"`
}
