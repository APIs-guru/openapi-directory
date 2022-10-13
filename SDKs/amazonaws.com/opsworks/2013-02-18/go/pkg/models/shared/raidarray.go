package shared

type RaidArray struct {
	AvailabilityZone *string `json:"AvailabilityZone"`
	CreatedAt        *string `json:"CreatedAt"`
	Device           *string `json:"Device"`
	InstanceID       *string `json:"InstanceId"`
	Iops             *int64  `json:"Iops"`
	MountPoint       *string `json:"MountPoint"`
	Name             *string `json:"Name"`
	NumberOfDisks    *int64  `json:"NumberOfDisks"`
	RaidArrayID      *string `json:"RaidArrayId"`
	RaidLevel        *int64  `json:"RaidLevel"`
	Size             *int64  `json:"Size"`
	StackID          *string `json:"StackId"`
	VolumeType       *string `json:"VolumeType"`
}
