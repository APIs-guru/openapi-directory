package shared

type VolumeConfiguration struct {
	Encrypted     *bool   `json:"Encrypted"`
	Iops          *int64  `json:"Iops"`
	MountPoint    string  `json:"MountPoint"`
	NumberOfDisks int64   `json:"NumberOfDisks"`
	RaidLevel     *int64  `json:"RaidLevel"`
	Size          int64   `json:"Size"`
	VolumeType    *string `json:"VolumeType"`
}
