package shared

type UpdateWorkloadShareOutput struct {
	WorkloadID    *string        `json:"WorkloadId,omitempty"`
	WorkloadShare *WorkloadShare `json:"WorkloadShare,omitempty"`
}
