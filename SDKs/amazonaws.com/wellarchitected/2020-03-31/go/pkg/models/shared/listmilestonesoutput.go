package shared

// ListMilestonesOutput
// Output of a list milestones call.
type ListMilestonesOutput struct {
	MilestoneSummaries []MilestoneSummary `json:"MilestoneSummaries,omitempty"`
	NextToken          *string            `json:"NextToken,omitempty"`
	WorkloadID         *string            `json:"WorkloadId,omitempty"`
}
