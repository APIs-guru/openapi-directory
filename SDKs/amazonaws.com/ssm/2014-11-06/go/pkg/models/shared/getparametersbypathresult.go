package shared

type GetParametersByPathResult struct {
	NextToken  *string     `json:"NextToken,omitempty"`
	Parameters []Parameter `json:"Parameters,omitempty"`
}
