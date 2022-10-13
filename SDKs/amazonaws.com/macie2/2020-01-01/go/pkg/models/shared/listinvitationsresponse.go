package shared

type ListInvitationsResponse struct {
	Invitations []Invitation `json:"invitations"`
	NextToken   *string      `json:"nextToken"`
}
