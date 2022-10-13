package shared

type UpdateVolumeRequest struct {
	MountPoint *string `json:"MountPoint"`
	Name       *string `json:"Name"`
	VolumeID   string  `json:"VolumeId"`
}
