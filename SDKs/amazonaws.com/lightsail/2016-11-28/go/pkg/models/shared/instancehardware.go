package shared

// InstanceHardware
// Describes the hardware for the instance.
type InstanceHardware struct {
	CPUCount    *int64   `json:"cpuCount,omitempty"`
	Disks       []Disk   `json:"disks,omitempty"`
	RAMSizeInGb *float32 `json:"ramSizeInGb,omitempty"`
}
