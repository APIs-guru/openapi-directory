package shared

// ListShareInvitationsOutput
// Input for List Share Invitations
type ListShareInvitationsOutput struct {
	NextToken                *string                  `json:"NextToken,omitempty"`
	ShareInvitationSummaries []ShareInvitationSummary `json:"ShareInvitationSummaries,omitempty"`
}
