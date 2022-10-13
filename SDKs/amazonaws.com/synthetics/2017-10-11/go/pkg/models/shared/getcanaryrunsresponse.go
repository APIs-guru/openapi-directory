package shared

type GetCanaryRunsResponse struct {
	CanaryRuns []CanaryRun `json:"CanaryRuns"`
	NextToken  *string     `json:"NextToken"`
}
