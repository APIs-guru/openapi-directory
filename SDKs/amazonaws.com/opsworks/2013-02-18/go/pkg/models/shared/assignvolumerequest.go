package shared

type AssignVolumeRequest struct {
	InstanceID *string `json:"InstanceId,omitempty"`
	VolumeID   string  `json:"VolumeId"`
}
