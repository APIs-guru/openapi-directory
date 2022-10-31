package shared

type DescribeVolumesRequest struct {
	InstanceID  *string  `json:"InstanceId,omitempty"`
	RaidArrayID *string  `json:"RaidArrayId,omitempty"`
	StackID     *string  `json:"StackId,omitempty"`
	VolumeIds   []string `json:"VolumeIds,omitempty"`
}
