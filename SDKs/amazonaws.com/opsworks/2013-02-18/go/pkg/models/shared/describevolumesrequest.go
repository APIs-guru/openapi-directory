package shared

type DescribeVolumesRequest struct {
	InstanceID  *string  `json:"InstanceId"`
	RaidArrayID *string  `json:"RaidArrayId"`
	StackID     *string  `json:"StackId"`
	VolumeIds   []string `json:"VolumeIds"`
}
