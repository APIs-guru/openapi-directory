package shared

// ComputeResource
// Compute resource requirements
type ComputeResource struct {
	BootDiskMib *string `json:"bootDiskMib,omitempty"`
	CPUMilli    *string `json:"cpuMilli,omitempty"`
	MemoryMib   *string `json:"memoryMib,omitempty"`
}
