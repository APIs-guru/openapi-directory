package shared

type ClientUserInvitation struct {
	ClientAccountID *string `json:"clientAccountId,omitempty"`
	Email           *string `json:"email,omitempty"`
	InvitationID    *string `json:"invitationId,omitempty"`
}
