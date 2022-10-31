package shared

type ListEmailIdentitiesResponse struct {
	EmailIdentities []IdentityInfo `json:"EmailIdentities,omitempty"`
	NextToken       *string        `json:"NextToken,omitempty"`
}
