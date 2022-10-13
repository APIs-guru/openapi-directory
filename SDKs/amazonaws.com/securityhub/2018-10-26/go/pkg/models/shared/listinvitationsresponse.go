package shared

type ListInvitationsResponse struct {
	Invitations []Invitation `json:"Invitations"`
	NextToken   *string      `json:"NextToken"`
}
