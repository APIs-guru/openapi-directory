package shared

type CreateContainerInput struct {
	ContainerName string `json:"ContainerName"`
	Tags          []Tag  `json:"Tags"`
}
