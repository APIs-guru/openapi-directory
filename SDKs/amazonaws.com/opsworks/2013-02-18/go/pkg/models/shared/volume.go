package shared

type Volume struct {
	AvailabilityZone *string `json:"AvailabilityZone"`
	Device           *string `json:"Device"`
	Ec2VolumeID      *string `json:"Ec2VolumeId"`
	Encrypted        *bool   `json:"Encrypted"`
	InstanceID       *string `json:"InstanceId"`
	Iops             *int64  `json:"Iops"`
	MountPoint       *string `json:"MountPoint"`
	Name             *string `json:"Name"`
	RaidArrayID      *string `json:"RaidArrayId"`
	Region           *string `json:"Region"`
	Size             *int64  `json:"Size"`
	Status           *string `json:"Status"`
	VolumeID         *string `json:"VolumeId"`
	VolumeType       *string `json:"VolumeType"`
}
