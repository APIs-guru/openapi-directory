package shared

type GetMilestoneOutput struct {
	Milestone  *Milestone `json:"Milestone"`
	WorkloadID *string    `json:"WorkloadId"`
}
