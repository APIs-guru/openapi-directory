package shared

type ContainerDetails struct {
	ImageID    *string `json:"ImageId"`
	ImageName  *string `json:"ImageName"`
	LaunchedAt *string `json:"LaunchedAt"`
	Name       *string `json:"Name"`
}
