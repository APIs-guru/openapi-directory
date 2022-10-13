package shared

type ListEulaAcceptancesResponse struct {
	EulaAcceptances []EulaAcceptance `json:"eulaAcceptances"`
	NextToken       *string          `json:"nextToken"`
}
