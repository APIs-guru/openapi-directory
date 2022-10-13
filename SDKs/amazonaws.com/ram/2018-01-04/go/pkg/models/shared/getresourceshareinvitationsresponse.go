package shared

type GetResourceShareInvitationsResponse struct {
	NextToken                *string                   `json:"nextToken"`
	ResourceShareInvitations []ResourceShareInvitation `json:"resourceShareInvitations"`
}
