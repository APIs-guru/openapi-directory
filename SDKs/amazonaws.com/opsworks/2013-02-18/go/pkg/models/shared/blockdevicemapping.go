package shared

type BlockDeviceMapping struct {
	DeviceName  *string         `json:"DeviceName"`
	Ebs         *EbsBlockDevice `json:"Ebs"`
	NoDevice    *string         `json:"NoDevice"`
	VirtualName *string         `json:"VirtualName"`
}
