package shared

type ListPrincipalsResponse struct {
	NextToken  *string     `json:"nextToken"`
	Principals []Principal `json:"principals"`
}
