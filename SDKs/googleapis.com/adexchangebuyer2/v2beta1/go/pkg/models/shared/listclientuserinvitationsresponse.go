package shared

type ListClientUserInvitationsResponse struct {
	Invitations   []ClientUserInvitation `json:"invitations,omitempty"`
	NextPageToken *string                `json:"nextPageToken,omitempty"`
}
