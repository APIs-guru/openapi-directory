package shared

type DescribeCanariesLastRunResponse struct {
	CanariesLastRun []CanaryLastRun `json:"CanariesLastRun"`
	NextToken       *string         `json:"NextToken"`
}
