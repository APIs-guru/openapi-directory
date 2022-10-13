package shared

type ListEmailIdentitiesResponse struct {
	EmailIdentities []IdentityInfo `json:"EmailIdentities"`
	NextToken       *string        `json:"NextToken"`
}
