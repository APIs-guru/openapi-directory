package shared

type InstanceBlockDeviceMapping struct {
	DeviceName *string                 `json:"deviceName"`
	Ebs        *EbsInstanceBlockDevice `json:"ebs"`
}
