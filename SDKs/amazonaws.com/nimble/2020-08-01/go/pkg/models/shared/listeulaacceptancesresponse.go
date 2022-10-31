package shared

type ListEulaAcceptancesResponse struct {
	EulaAcceptances []EulaAcceptance `json:"eulaAcceptances,omitempty"`
	NextToken       *string          `json:"nextToken,omitempty"`
}
