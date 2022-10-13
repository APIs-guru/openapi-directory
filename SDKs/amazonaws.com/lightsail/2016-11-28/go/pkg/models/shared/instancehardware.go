package shared

type InstanceHardware struct {
	CPUCount    *int64   `json:"cpuCount"`
	Disks       []Disk   `json:"disks"`
	RAMSizeInGb *float32 `json:"ramSizeInGb"`
}
