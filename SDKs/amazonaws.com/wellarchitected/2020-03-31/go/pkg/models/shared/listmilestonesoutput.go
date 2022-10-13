package shared

type ListMilestonesOutput struct {
	MilestoneSummaries []MilestoneSummary `json:"MilestoneSummaries"`
	NextToken          *string            `json:"NextToken"`
	WorkloadID         *string            `json:"WorkloadId"`
}
