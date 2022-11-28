package shared

// CreateMilestoneOutput
// Output of a create milestone call.
type CreateMilestoneOutput struct {
	MilestoneNumber *int64  `json:"MilestoneNumber,omitempty"`
	WorkloadID      *string `json:"WorkloadId,omitempty"`
}
