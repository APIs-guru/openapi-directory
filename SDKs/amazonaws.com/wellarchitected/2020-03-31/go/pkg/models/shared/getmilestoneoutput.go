package shared

// GetMilestoneOutput
// Output of a get milestone call.
type GetMilestoneOutput struct {
	Milestone  *Milestone `json:"Milestone,omitempty"`
	WorkloadID *string    `json:"WorkloadId,omitempty"`
}
