package shared

// UpdateWorkloadShareOutput
// Input for Update Workload Share
type UpdateWorkloadShareOutput struct {
	WorkloadID    *string        `json:"WorkloadId,omitempty"`
	WorkloadShare *WorkloadShare `json:"WorkloadShare,omitempty"`
}
