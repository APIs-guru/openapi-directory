package shared

type AssignVolumeRequest struct {
	InstanceID *string `json:"InstanceId"`
	VolumeID   string  `json:"VolumeId"`
}
