package shared

// BlockDeviceMapping
// Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type.
type BlockDeviceMapping struct {
	DeviceName  *string         `json:"DeviceName,omitempty"`
	Ebs         *EbsBlockDevice `json:"Ebs,omitempty"`
	NoDevice    *string         `json:"NoDevice,omitempty"`
	VirtualName *string         `json:"VirtualName,omitempty"`
}
