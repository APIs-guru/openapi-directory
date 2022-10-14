package shared

type RelationalDatabaseHardware struct {
	CPUCount     *int64   `json:"cpuCount,omitempty"`
	DiskSizeInGb *int64   `json:"diskSizeInGb,omitempty"`
	RAMSizeInGb  *float32 `json:"ramSizeInGb,omitempty"`
}
