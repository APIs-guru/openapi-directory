package shared

type GetOpsSummaryResult struct {
	Entities  []OpsEntity `json:"Entities,omitempty"`
	NextToken *string     `json:"NextToken,omitempty"`
}
