package shared

type InstanceBlockDeviceMapping struct {
	DeviceName *string                 `json:"deviceName,omitempty"`
	Ebs        *EbsInstanceBlockDevice `json:"ebs,omitempty"`
}
