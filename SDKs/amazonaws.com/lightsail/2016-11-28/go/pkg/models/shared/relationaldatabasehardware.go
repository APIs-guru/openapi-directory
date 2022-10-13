package shared

type RelationalDatabaseHardware struct {
	CPUCount     *int64   `json:"cpuCount"`
	DiskSizeInGb *int64   `json:"diskSizeInGb"`
	RAMSizeInGb  *float32 `json:"ramSizeInGb"`
}
