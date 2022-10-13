package shared

type GetOpsSummaryResult struct {
	Entities  []OpsEntity `json:"Entities"`
	NextToken *string     `json:"NextToken"`
}
