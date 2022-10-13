package shared

type UpdateWorkloadShareOutput struct {
	WorkloadID    *string        `json:"WorkloadId"`
	WorkloadShare *WorkloadShare `json:"WorkloadShare"`
}
