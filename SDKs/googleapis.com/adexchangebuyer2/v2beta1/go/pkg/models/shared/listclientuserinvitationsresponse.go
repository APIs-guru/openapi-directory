package shared

type ListClientUserInvitationsResponse struct {
	Invitations   []ClientUserInvitation `json:"invitations"`
	NextPageToken *string                `json:"nextPageToken"`
}
