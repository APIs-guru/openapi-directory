package shared

// InstanceBlockDeviceMapping
// The description of a block device mapping.
type InstanceBlockDeviceMapping struct {
	DeviceName *string                 `json:"deviceName,omitempty"`
	Ebs        *EbsInstanceBlockDevice `json:"ebs,omitempty"`
}
