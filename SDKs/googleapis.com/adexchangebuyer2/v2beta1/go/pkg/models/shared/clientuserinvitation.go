package shared

// ClientUserInvitation
// An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified.
type ClientUserInvitation struct {
	ClientAccountID *string `json:"clientAccountId,omitempty"`
	Email           *string `json:"email,omitempty"`
	InvitationID    *string `json:"invitationId,omitempty"`
}
