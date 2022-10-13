package shared

type GetParameterHistoryResult struct {
	NextToken  *string            `json:"NextToken"`
	Parameters []ParameterHistory `json:"Parameters"`
}
