package shared

type GetParametersByPathResult struct {
	NextToken  *string     `json:"NextToken"`
	Parameters []Parameter `json:"Parameters"`
}
