package shared

type Volume struct {
	AvailabilityZone *string `json:"AvailabilityZone,omitempty"`
	Device           *string `json:"Device,omitempty"`
	Ec2VolumeID      *string `json:"Ec2VolumeId,omitempty"`
	Encrypted        *bool   `json:"Encrypted,omitempty"`
	InstanceID       *string `json:"InstanceId,omitempty"`
	Iops             *int64  `json:"Iops,omitempty"`
	MountPoint       *string `json:"MountPoint,omitempty"`
	Name             *string `json:"Name,omitempty"`
	RaidArrayID      *string `json:"RaidArrayId,omitempty"`
	Region           *string `json:"Region,omitempty"`
	Size             *int64  `json:"Size,omitempty"`
	Status           *string `json:"Status,omitempty"`
	VolumeID         *string `json:"VolumeId,omitempty"`
	VolumeType       *string `json:"VolumeType,omitempty"`
}
