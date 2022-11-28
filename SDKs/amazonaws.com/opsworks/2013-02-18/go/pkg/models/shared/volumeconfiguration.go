package shared

// VolumeConfiguration
// Describes an Amazon EBS volume configuration.
type VolumeConfiguration struct {
	Encrypted     *bool   `json:"Encrypted,omitempty"`
	Iops          *int64  `json:"Iops,omitempty"`
	MountPoint    string  `json:"MountPoint"`
	NumberOfDisks int64   `json:"NumberOfDisks"`
	RaidLevel     *int64  `json:"RaidLevel,omitempty"`
	Size          int64   `json:"Size"`
	VolumeType    *string `json:"VolumeType,omitempty"`
}
