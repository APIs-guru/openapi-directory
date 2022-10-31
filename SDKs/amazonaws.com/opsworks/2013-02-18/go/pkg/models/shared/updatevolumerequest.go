package shared

type UpdateVolumeRequest struct {
	MountPoint *string `json:"MountPoint,omitempty"`
	Name       *string `json:"Name,omitempty"`
	VolumeID   string  `json:"VolumeId"`
}
