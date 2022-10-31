package shared

type RaidArray struct {
	AvailabilityZone *string `json:"AvailabilityZone,omitempty"`
	CreatedAt        *string `json:"CreatedAt,omitempty"`
	Device           *string `json:"Device,omitempty"`
	InstanceID       *string `json:"InstanceId,omitempty"`
	Iops             *int64  `json:"Iops,omitempty"`
	MountPoint       *string `json:"MountPoint,omitempty"`
	Name             *string `json:"Name,omitempty"`
	NumberOfDisks    *int64  `json:"NumberOfDisks,omitempty"`
	RaidArrayID      *string `json:"RaidArrayId,omitempty"`
	RaidLevel        *int64  `json:"RaidLevel,omitempty"`
	Size             *int64  `json:"Size,omitempty"`
	StackID          *string `json:"StackId,omitempty"`
	VolumeType       *string `json:"VolumeType,omitempty"`
}
