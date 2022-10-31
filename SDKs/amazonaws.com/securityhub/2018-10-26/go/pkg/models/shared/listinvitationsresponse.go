package shared

type ListInvitationsResponse struct {
	Invitations []Invitation `json:"Invitations,omitempty"`
	NextToken   *string      `json:"NextToken,omitempty"`
}
