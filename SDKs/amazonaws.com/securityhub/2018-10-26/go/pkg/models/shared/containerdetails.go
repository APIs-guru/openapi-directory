package shared

// ContainerDetails
// Container details related to a finding.
type ContainerDetails struct {
	ImageID    *string `json:"ImageId,omitempty"`
	ImageName  *string `json:"ImageName,omitempty"`
	LaunchedAt *string `json:"LaunchedAt,omitempty"`
	Name       *string `json:"Name,omitempty"`
}
