package shared

type ClientUserInvitation struct {
	ClientAccountID *string `json:"clientAccountId"`
	Email           *string `json:"email"`
	InvitationID    *string `json:"invitationId"`
}
