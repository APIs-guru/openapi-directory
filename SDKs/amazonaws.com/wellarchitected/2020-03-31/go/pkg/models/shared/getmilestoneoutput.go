package shared

type GetMilestoneOutput struct {
	Milestone  *Milestone `json:"Milestone,omitempty"`
	WorkloadID *string    `json:"WorkloadId,omitempty"`
}
